import React from 'react';

export interface IE11Props {}

const IE11: React.SFC<IE11Props> = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <h1 style={{ color: 'blue' }}>AU MCQ</h1>
      <h2>
        Din internet browser understøtter ikke nyere teknologi, og kan derfor ikke køre AU MCQ.
        <br />
        Benyt venligst Chrome, Firefox, Edge eller anden nyrere browser i stedet.
      </h2>
    </div>
  );
};

export default IE11;
