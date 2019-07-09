const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id: 0,
    thumbnail:
      'https://vignette.wikia.nocookie.net/smurfs/images/1/1b/Sassette%27sBewitchingFriendship26.png/revision/latest/scale-to-width-down/185?cb=20140622161906',
    name: 'Sassette',
    age: 200,
    height: '2.5cm',
    occupation: 'Adventuress'
  },
  {
    id: 1,
    thumbnail:
      'https://vignette.wikia.nocookie.net/smurfs/images/b/bf/Shopping_Smurfette_Icon_SV_2019.png/revision/latest?cb=20190627210712',
    name: 'Smurfette',
    age: 400,
    height: '3cm',
    occupation: 'Beautician & Nurturer'
  },
  {
    id: 2,
    thumbnail:
      'https://vignette.wikia.nocookie.net/smurfs/images/1/1b/SmurfTheOtherCheek118.png/revision/latest/scale-to-width-down/185?cb=20141013190024',
    name: 'Papa',
    age: 1000,
    height: '4cm',
    occupation: 'Village Leader'
  }
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/smurfs', (req, res) => {
  const { name, thumbnail, age, height, occupation } = req.body;
  const newSmurf = { name, thumbnail, age, height, occupation, id: smurfId };
  if (!name || !age || !height || !occupation) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, thumbnail, age, height, occupation } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (thumbnail) foundSmurf.thumbnail = thumbnail;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    if (occupation) foundSmurf.occupation = occupation;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
