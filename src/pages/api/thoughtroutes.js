import connectMongo from '../../lib/connectMongo';
import Thought from "../../models/Thoughts"

export default async function thoughtHandler(req, res) {
    switch (req.method) {
        case 'GET' : {
            if (req.query.name) {
                return getThoughtByName(req, res)
            }else{
                return getThoughts(req, res)
            }
        }
        case 'POST' : {
            return addThought(req, res)
        }
        default: {
            return res.status(405).json({ error: 'Method not allowed'})
        }
    }
}

async function getThoughts(req, res) {
    try {
      await connectMongo();
  
      const thoughts = await Thought.find();
  
      res.status(200).json(thoughts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function getThoughtByName(req, res){
    try{
        await connectMongo()

        const thought = await Thought.findOne({name: req.query.name})

        if(!thought){
            return res.status(404).json({error: error.message})
        }
        res.status(200).json(thought)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  }

  async function addThought(req, res) {
    try {
      await connectMongo();
  
      const thought = await Thought.create(req.body);
  
      res.status(201).json(thought);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }