import PointAwardThreshold from "../types/PointAwardThreshold";

const pointAwardThresholdList: Array<PointAwardThreshold> = [
    {
        transactionValueOver: 50,
        pointsAwarded: 1,
        pointsStep: 1,
        maxPoints: 50,
    },
    {
        transactionValueOver: 100,
        pointsAwarded: 2,
        pointsStep: 1,
        maxPoints: Number.POSITIVE_INFINITY,
    },
];

export default pointAwardThresholdList;