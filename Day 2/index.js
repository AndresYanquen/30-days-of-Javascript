let challenge = "30 Days Of JavaScript";
let socialNetwork='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let space=' 30 Days Of JavaScript ';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3,4));
console.log(challenge.substring(3,21));
console.log(challenge.includes("Script")); // return boolean
console.log(challenge.split()); // Put the content of the string as array ['30 Days of Javascript']
console.log(challenge.split(' '));
console.log(socialNetwork.split(','));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
//15
console.log(challenge.indexOf('a'));
//16
console.log(challenge.lastIndexOf('a'));
//17
console.log(sentence.indexOf('because'));
//18
console.log(sentence.lastIndexOf('because'));
//19
console.log(space.trim());
//20
console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));
//23
console.log(challenge.match(/a/));
//24
console.log('30 Days of'.concat(' JavaScript'));
//25
console.log('30 Days Of JavaScript'.repeat(5));


/////////////////////////////////////
//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

console.log(3,typeof '10' == 'string');

console.log('python and jargon'.match(/on/g));
console.log(5,'I hope this course is not full of jargon'.includes('jargon'));
console.log(Math.random()*100);
console.log(Math.floor(Math.random() * 100) + 50);

const sentenceRegex = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentenceRegex);
console.log(sentenceRegex.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));