class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        return this.name + this.age + '岁了，' + '会说话啦！';
    }
    walk() {
        return this.name + this.age + '岁了，' + '会走路啦！';
    }
}
export default Person;