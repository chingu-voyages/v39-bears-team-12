import TestGroup from "../../models/testGroups.model";
import Organisation from "../../models/organisations.model";
import { Request, Response } from "express";


export async function createTestGroups( req: Request, res : Response ) {
    const organisation = await Organisation.findOne({ id: req.body.orgId }) 
    if (organisation) {
        console.log(`Adding new test Group to ${organisation.name}`)
        const testGroup = { id: req.body.testGroupId, name: req.body.name, description: req.body.description }
        await Organisation.updateOne({
        id: organisation.id,
        testGroups: [...organisation.testGroups, testGroup],
        })
        res.send({ success: true, data: testGroup })
    } else {
        res.status(501).send({ success: false, message: 'Unable to create a new test group' })
    }
}

