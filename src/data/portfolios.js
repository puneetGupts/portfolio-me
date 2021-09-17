import frontend from '../img/portImages/front_end.png';
import python from '../img/portImages/python.png';
import react1 from '../img/portImages/react_styled.png';
import java from '../img/portImages/java_image.png';
import golang from '../img/portImages/golang.jpg';
import matlab from '../img/portImages/matlab.jpg';

const portfolios = [
    {
        id: 1,
        category: 'Javascript , HTML and CSS',
        image: frontend,
        link1: 'https://github.com/puneetGupts/Javascript-and-HTML',
        title: 'Fun with Html, CSS and JavaScript',
        text: 'Series of projects created with Javascript, HTML and CSS.'
    },
    {
        id: 2,
        category: 'Python',
        image: python,
        link1: 'https://github.com/puneetGupts/Tik-Tac-To-Game',
        title: 'Tic-Tac-Toe Game',
        text: 'Interactive Tic-Tac-Toe Game in python'
    },
    {
        id: 3,
        category: 'Golang',
        image: golang,
        link1: 'https://github.com/puneetGupts/project-bouncing-ball',
        title: 'Bouncing Ball',
        text: 'An animation of a bouncing ball written in golang'
    },
    {
        id: 4,
        category: 'Golang',
        image: golang,
        link1: 'https://github.com/puneetGupts/retro-led-clock',
        title: 'A retro clock',
        text: 'An animated Retro clock in golang'
    },
    {
        id: 5,
        category: 'Java',
        image: java,
        link1: 'https://github.com/puneetGupts/Student_Teacher_Management_System',
        title: 'Record Management System',
        text: 'A Simple Record management system in java with swing'
    },
    {
        id: 6,
        category: 'React JS',
        image: react1,
        link1: 'https://www.google.com',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
    {
        id: 7,
        category: 'Matlab & Image Processing ',
        image: matlab,
        link1: 'https://github.com/puneetGupts/Leaf-Disease-Identification-System',
        title: 'Leaf Identification system using ML',
        text: 'Identifying leaf images using Image processing and Machine Learning'
    }
]

export default portfolios;