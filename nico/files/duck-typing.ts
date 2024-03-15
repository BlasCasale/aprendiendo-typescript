interface Instructor {
    name: string;
    age: number;
};

const infoInstructor = (inst: Instructor): void => {
    console.log(`${inst.name} - ${inst.age} es la edad del instructor`);
};

const noTypeVar: Instructor = { name: "Blas", age: 26 };
infoInstructor(noTypeVar);