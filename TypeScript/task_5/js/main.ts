interface MajorCredits {
  credits: number;
  brand: "Major";
}

interface MinorCredits {
  credits: number;
  brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand
};
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand
};
}

const Majsubject1: MajorCredits = { credits: 30, brand: "Major" };
const MajSubject2: MajorCredits = { credits: 40, brand: "Major" };

const MinSubject1: MinorCredits = { credits: 10, brand: "Minor" };
const MinSubject2: MinorCredits = { credits: 20, brand: "Minor" };

const totalMajorCredits = sumMajorCredits(Majsubject1, MajSubject2);
const totalMinorCredits = sumMinorCredits(MinSubject1, MinSubject2);

console.log("Total Major Credits:", totalMajorCredits);
console.log("Total Minor Credits:", totalMinorCredits);
