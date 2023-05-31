/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

const avgScoreDolphins = (97 + 112 + 80) / 3;
const avgScoreKoalas = (109 + 95 + 50) / 3;
const minimumScore = 100;

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= minimumScore) {
    console.log(`Dolphins Win with ${avgScoreDolphins}`);
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= minimumScore && avgScoreKoalas >= minimumScore) {
    console.log(`There is a draw, Dolphins${avgScoreDolphins} : Koalas ${avgScoreKoalas} both win`);
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= minimumScore) {
    console.log(`Koalas Win with ${avgScoreKoalas}`);
} else {
    console.log(`no team wins`);
}