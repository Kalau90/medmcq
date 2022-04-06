import { CronJob } from "cron";
import _ from 'lodash';
import Objection from "objection";
import Question from "models/question";
import QuestionAnswer from "models/questionAnswer.model";
import QuestionUserAnswer from "models/question_user_answer"

export const updatePercentage = async () => {
    //const q = await knex("question").where("id", "<", 200).select("id").then(async function(questions){
    const q = await Question.query().select("id").then(async function(questions){
    	for(let q of questions){
	    	const answers = await QuestionAnswer.query().where("question_id", "=", q.id).select("id");
	    	const answer_ids = answers.map((v) => { return v.id });
	    	const all = await QuestionUserAnswer.query().whereIn("answer_id", answer_ids).select(["id", "created_at", "answer_id", "user_id"]).orderBy("created_at", "asc");
	    	//const first_answers = _.uniqBy(all, "user_id");
            const first_answers = _(all)
                .uniqBy((answer) => answer.userId)
                .value();
	    	const n_total = first_answers.length;
	    	for(let a of answer_ids){
	    		const local = first_answers.filter((v) => { return v.answerId == a } )
	    		const n_local = local.length;
	    		const percentage = Math.round((n_local/n_total)*100)
                if(percentage){
                    const upd = await QuestionAnswer.query().update({ "percentage": percentage}).where("id", "=", a);
                }else{
                    const upd = await QuestionAnswer.query().update({ "percentage": 0}).where("id", "=", a);
                }
	    	}
	}
    });
    console.log("Updated percentages!")
}

const updatePercentageCron = new CronJob("0 0 4 * * *", () => {
    updatePercentage();
});

export default updatePercentageCron;