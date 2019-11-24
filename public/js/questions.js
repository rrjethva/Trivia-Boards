
var questions = {
    category: {
        animals: [
            {
                id: 1,
                category: "animals",
                question: "Which of these dinosaurs lived during the Jurassic Period?",
                answers: {
                a: "Triceratops",
                b: "Stegosaurus",
                c: "Eoraptor",
                d: "Tyrannosaurus Rex",
                },
                correct: "b",
                background: "https://ctl.s6img.com/society6/img/33BLYIs4ETa02bTqO645P3LlHg8/w_700/leggings/swatch/~artwork,iw_7500,ih_9000/s6-original-art-uploads/society6/uploads/misc/26510344811c4b6c9c41ad5fda7f7179/~~/dinosaur-pattern80485-leggings.jpg"
            },
            {
                id: 2,
                category: "animals",
                question: "Which of the following is NOT a characteristic of reptiles?",
                answers: {
                a: "They are warmblooded",
                b: "Most lay eggs",
                c: "They have thick scaly skin",
                d: "They breathe with lungs",
                },
                correct: "a",
                background: "https://www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p4908_i288_w750.jpeg"
            },
            {
                id: 3,
                category: "animals",
                question: "Which of these mammals lay eggs?",
                answers: {
                a: "Echidna",
                b: "Bongo",
                c: "Kiwi",
                d: "Southern right whale",
                },
                correct: "a",
                background: "https://image.freepik.com/free-vector/cute-animal-pattern_1234-128.jpg"
            },
            {
                id: 4,
                category: "animals",
                question: "What is the term for a young horse?",
                answers: {
                a: "Cub",
                b: "Cygnet",
                c: "Foal",
                d: "Calf",
                },
                correct: "c",
                background: "https://cdn.shopify.com/s/files/1/1413/2106/products/Horses_12_x_12_ST_large.png?v=1490499062"
            },
            {
                id: 5,
                category: "animals",
                question: "What is the fastest animal on Earth?",
                answers: {
                a: "Cheetah",
                b: "Peregrine Falcon",
                c: "Leopard",
                d: "Hyena",
                },
                correct: "b",
                background: "https://img.freepik.com/free-vector/colorful-doodle-animals-words-pattern_52683-6876.jpg?size=338&ext=jpg"
            },
            {
                id: 6,
                category: "animals",
                question: "Which of these animals is NOT endangered?",
                answers: {
                a: "Red wolf",
                b: "Sperm Whale",
                c: "Capybara",
                d: "Jaguar",
                },
                correct: "c",
                background: "https://ih0.redbubble.net/image.370519435.6625/flat,1000x1000,075,f.u1.jpg"
            },
            {
                id: 7,
                category: "animals",
                question: "Which animal could not survive in Africa?",
                answers: {
                a: "Hippopotamus",
                b: "Tsetse fly",
                c: "Wildcat",
                d: "Giraffe",
                },
                correct: "c",
                background: "https://img.freepik.com/free-vector/full-color-pattern-with-ethnic-ornaments_1110-455.jpg?size=338&ext=jpg"
            },
            {
                id: 8,
                category: "animals",
                question: "What is the most poisonous snake on the planet?",
                answers: {
                a: "Cobra",
                b: "Inland Taipan",
                c: "Western diamondback Rattlesnake",
                d: "Black mamba",
                },
                correct: "b",
                background: "https://fbcd.co/images/products/5c3a88bf89433439b33b825bbdcd8ca6.jpg"
            },
            {
                id: 9,
                category: "animals",
                question: "Which is the biggest species of shark?",
                answers: {
                a: "Great White shark",
                b: "Hammerhead shark",
                c: "Whale shark",
                d: "Basking shark",
                },
                correct: "c",
                background: "https://i.pinimg.com/originals/be/34/2f/be342fdf971d70f9d32d67715c6504b5.jpg"
            },
            {
                id: 10,
                category: "animals",
                question: "What is a rhinoceros' horn made up of?",
                answers: {
                a: "Ivory",
                b: "Bone",
                c: "Scales",
                d: "Hair",
                },
                correct: "d",
                background: "https://img.freepik.com/free-vector/colorful-doodle-animals-words-pattern_52683-6876.jpg?size=338&ext=jpg"
            },
        ],
        geography: {
        },
        movies: {
            q1: {
                question: "What was the top-grossing film for 2002?",
                answers: {
                a: "Signs",
                b: "Star Wars: Episode II",
                c: "My Big Fat Greek Wedding",
                d: "Spiderman",
                },
                correct: "d"
            },
            q2: {
                question: "Which 2005 film's tagline is \"Better Late Than Never\"?",
                answers: {
                a: "Fantastic Four",
                b: "The Hitchhiker's Guide to the Galaxy",
                c: "The Ring Two",
                d: "The 40 Year Old Virgin",
                },
                correct: "d"
            },
        },
        music: {
        },
        sports: {

        }
    }
}


module.exports = questions;

/*
//////////////////////////////////////////////////
FORMAT FOR ADDING QUESTIONS:

var questions = {
    category: {
        animals: {
            q#: {
                question: <YOUR QUESTION HERE>,
                answers: {
                    a: <answer A>,
                    b: <answer B>,
                    c: <answer C>,
                    d: <answer D>,
                },
                correct: <THE CORRECT ANSWER LETTER>
                }
            }
        }
    }
}
//////////////////////////////////////////////////
*/