import PointAwardThreshold from '../types/PointAwardThreshold';
import pointAwardThresholdList from '../data/pointAwardThresholdList';

function getThresholdPointsForGivenValue(threshold: PointAwardThreshold, value: number): number {
    if (value <= threshold.transactionValueOver) {
        return 0;
    }

    const valueExcess = value - threshold.transactionValueOver;
    const points = Math.floor(valueExcess / threshold.pointsStep) * threshold.pointsAwarded;

    return Math.min(points, threshold.maxPoints);
}

export default function getTransactionValuePoints(transactionValue: number): number {
    if (!isFinite(transactionValue)) {
        return 0;
    }

    const transactionValueFloored = Math.floor(transactionValue);
    let points = 0;

    for (const threshold of pointAwardThresholdList) {
        points += getThresholdPointsForGivenValue(threshold, transactionValueFloored);
    }

    return points;
}