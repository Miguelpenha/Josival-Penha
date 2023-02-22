import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    overflow: hidden;

    .principal {
        width: 85%;
        display: flex;
        align-self: center;
    }

    .principal>.container-photo {
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        margin-top: 8%;
        position: relative;
    }

    .principal>.container-photo>.photo {
        width: 100%;
        height: auto;
    }

    .principal>.container-photo>.photo-animation {
        width: 100%;
        height: auto;
        position: absolute;
        transform: scale(1.1);
        animation: photoScale 5s linear infinite;
    }

    @keyframes photoScale {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }

    .principal>.container-description {
        display: flex;
        margin-top: 8%;
    }

    .principal>.container-description>.label {
        display: none;
    }

    .principal>.container-description>.title {
        color: ${props => props.theme.color};
        font-weight: 900;
        font-size: 2.51rem;
    }

    .principal>.container-description>.description {
        display: flex;
        margin-top: 6%;
        color: ${props => props.theme.color};
        font-weight: 600;
        font-size: 1.27rem;
    }

    .principal>.container-description>.button {
        display: none;
    }

    #form-contact {
        display: none;
    }

    .objective {
        display: flex;
        margin-top: 10%;
    }

    .objective>.button-whatsapp {
        width: 80%;
        padding: 4%;
        display: flex;
        align-self: center;
        align-items: center;
        flex-direction: row;
        border-radius: 40px;
        text-decoration: none;
        justify-content: center;
        transition-duration: 0.1s;
        background-color: #0AD08C;
        transition-timing-function: linear;
    }

    .objective>.button-whatsapp:hover {
        filter: brightness(0.9);
    }

    .objective>.button-whatsapp>img {
        width: 6.1vw;
        height: 6.1vw;
    }

    .objective>.button-whatsapp>span {
        font-size: 4vw;
        color: ${props => props.theme.backgroundColor};
        padding-left: 5%;
        font-weight: bold;
    }

    .objective>.photo {
        width: 70%;
        z-index: -1;
        height: auto;
        margin-top: 10%;
        align-self: center;
    }

    .objective>.background {
        width: 100%;
        z-index: -1;
        height: auto;
        margin-top: 114%;
        position: absolute;
    }

    .objective>.container-description {
        display: flex;
        margin-top: 0%;
    }

    .objective>.container-description>.title {
        width: 85%;
        color: ${props => props.theme.colorSecondary};
        font-weight: bold;
        font-size: 1.89rem;
        text-align: center;
        align-self: center;
    }

    .objective>.container-description>.description, .objective>.container-description>.description>* {
        width: 85%;
        margin-top: 5%;
        color: ${props => props.theme.colorSecondary};
        font-size: 1.09rem;
        align-self: center;
        text-align: center;
        font-weight: normal;
    }

    .objective>.container-description>.description>.highlighted {
        font-weight: bold;
    }

    .objectives {
        width: 100%;
        display: flex;
        align-self: center;
        background-color: ${props => props.theme.colorSecondary};
    }

    .objectives>.container-objetives {
        display: flex;
        margin-bottom: 2%;
        align-items: center;
        flex-direction: column;
    }

    .objectives>.container-objetives>.objetive {
        width: 80%;
        display: flex;
        margin-top: 2%;
        flex-direction: column;
    }

    .objectives>.container-objetives>.objetive>.container-photo {
        width: 100%;
        display: flex;
        position: relative;
        margin: 0% 8% 0% 0%;
    }

    .objectives>.container-objetives>.objetive>.container-photo>.photo {
        width: 100%;
        height: auto;
    }

    .objectives>.container-objetives>.objetive>.container-photo>.icon {
        width: 18%;
        position: absolute;
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon {
        fill: ${props => props.theme.backgroundColorSecondary};
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon {
        fill: ${props => props.theme.primary};
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(2) {
        top: 12%;
        left: 5%;
        transform: rotate(-5deg);
        animation: balance1 5s infinite;
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(3) {
        top: 40%;
        left: -15%;
        transform: rotate(-5deg);
        animation: balance1 5s infinite;
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(4) {
        top: 70%;
        left: -20%;
        fill: ${props => props.theme.tertiary};
        transform: rotate(-5deg);
        animation: balance1 5s infinite;
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(5) {
        top: 30%;
        right: -15%;
        fill: ${props => props.theme.tertiary};
        transform: rotate(0deg);
        animation: balance2 5s infinite;
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(6) {
        top: 60%;
        right: -12%;
        transform: rotate(5deg);
        animation: balance3 5s infinite;
    }

    @keyframes balance1 {
        0% {
            transform: rotate(-5deg) scale(1);
        }

        50% {
            transform: rotate(5deg) scale(0.9);
        }

        100% {
            transform: rotate(-5deg) scale(1);
        }
    }

    @keyframes balance2 {
        0% {
            transform: rotate(0deg) scale(1);
        }

        50% {
            transform: rotate(15deg) scale(0.9);
        }

        100% {
            transform: rotate(0deg) scale(1);
        }
    }

    @keyframes balance3 {
        0% {
            transform: rotate(5deg) scale(1);
        }

        50% {
            transform: rotate(-5deg) scale(0.9);
        }

        100% {
            transform: rotate(5deg) scale(1);
        }
    }

    @keyframes balanceStar {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(2) {
        top: 2%;
        left: 25%;
        width: 15%;
        animation: balanceStar 17s infinite linear;
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(3) {
        top: 20%;
        left: 5%;
        width: 12%;
        fill: ${props => props.theme.tertiary};
        transform: rotate(-15deg);
        animation: balanceStar 17s infinite linear;
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(4) {
        top: 2%;
        right: -5%;
        fill: ${props => props.theme.primary};
        animation: balanceStar 17s infinite linear;
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(5) {
        top: 25%;
        width: 14%;
        right: -8%;
        fill: ${props => props.theme.primary};
        animation: balanceStar 17s infinite linear;
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(6) {
        top: 45%;
        width: 12%;
        right: -5%;
        fill: ${props => props.theme.tertiary};
        animation: balanceStar 17s infinite linear;
    }

    .objectives>.container-objetives>.objetive>.texts {
        display: flex;
        align-self: center;
        position: relative;
        height: fit-content;
    }

    .objectives>.container-objetives>.objetive>.texts>.description {
        margin-top: 20%;
        font-size: 1.1rem;
    }

    .objectives>.container-objetives>.objetive>.texts>.description>.highlighted {
        font-weight: bold;
    }

    .objectives>.container-objetives>.objetive>.texts>.highlighted {
        display: flex;
        padding: 0.8rem;
        margin-bottom: 8%;
        align-self: center;
        position: absolute;
        border-radius: 10px;
        flex-direction: row;
        align-items: center;
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.texts>.highlighted {
        width: 11rem;
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.texts>.highlighted {
        width: 16rem;
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.texts>.highlighted {
        top: -15%;
        background-color: ${props => props.theme.backgroundColorSecondary};
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.texts>.highlighted {
        top: -20%;
        background-color: ${props => props.theme.primary};
    }

    .objectives>.container-objetives>.objetive>.texts>.highlighted>.icon {
        fill: ${props => props.theme.secondary};
        margin-left: auto;
    }

    .objectives>.container-objetives>.objetive:nth-child(1)>.texts>.highlighted>.icon {
        width: 2rem;
    }

    .objectives>.container-objetives>.objetive:nth-child(2)>.texts>.highlighted>.icon {
        width: 2.5rem;
    }

    .objectives>.container-objetives>.objetive>.texts>.highlighted>.texts {
        display: flex;
        flex-direction: column;
    }

    .objectives>.container-objetives>.objetive>.texts>.highlighted>.texts>.text:nth-child(1) {
        color: ${props => props.theme.colorSecondary};
        font-weight: 600;
        font-size: 1.15rem;
    }

    .objectives>.container-objetives>.objetive>.texts>.highlighted>.texts>.text:nth-child(2) {
        color: ${props => props.theme.secondary};
        font-size: 1.75rem;
        font-weight: bolder;
    }

    .objectives>.button {
        width: 70%;
        display: flex;
        padding: 4.5% 5%;
        margin-top: 10%;
        cursor: pointer;
        color: ${props => props.theme.colorSecondary};
        font-size: 1.6rem;
        margin-bottom: 5%;
        font-weight: bold;
        align-self: center;
        white-space: nowrap;
        border-radius: 20px;
        align-items: center;
        text-decoration: none;
        transition-duration: 0.1s;
        background-color: ${props => props.theme.secondary};
        transition-timing-function: linear;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .objectives>.button:hover {
        filter: brightness(0.9);
    }

    .cards {
        width: 100%;
        display: none;
        background-color: ${props => props.theme.colorSecondary};
    }

    .cards>.list {
        display: flex;
        list-style: none;
        overflow-x: scroll;
        flex-direction: row;
        scroll-snap-type: x mandatory;
    }

    .cards>.list::-webkit-scrollbar {
        display: none;
    }

    .cards>.list>.card {
        margin: 2.5%;
        padding: 1rem;
        min-width: 13.13rem;
        border-radius: 10px;
        scroll-snap-align: center;
        background-color: ${props => props.theme.primary};
    }

    .cards>.list>.card>.title {
        color: ${props => props.theme.secondary};
        font-size: 1.4rem;
        text-align: center;
    }

    .cards>.list>.card>.text {
        display: flex;
        margin-top: 10%;
        color: ${props => props.theme.colorSecondary};
        font-size: 1rem;
    }

    .gallery {
        padding: 5%;
        display: flex;
        background-color: ${props => props.theme.backgroundColorSecondary};
    }

    .gallery>.title {
        width: 90%;
        margin-top: 4%;
        margin-bottom: 10%;
        align-self: center;
    }

    .gallery>.title, .gallery>.title>* {
        color: ${props => props.theme.backgroundColor};
        font-weight: bold;
        font-size: 1.58rem;
        text-align: center;
    }

    .gallery>.title>.highlighted {
        color: ${props => props.theme.secondary};
    }

    .gallery>.photos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .gallery>.photos {
        gap: 2vw;
    }

    .gallery>.photos>img {
        width: 100%;
        height: auto;
        padding: 3.5% 2.5%;
    }

    .gallery>.photos>img {
        padding: 0%;
        cursor: pointer;
        border-radius: 20px;
        transition-duration: 0.15s;
        transition-timing-function: linear;
    }

    .gallery>.photos>img:hover {
        transform: scale(1.05);
        filter: brightness(0.8);
        animation: floatImage 1s infinite linear;
        box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    }

    @keyframes floatImage {
        50% {
            transform: scale(1);
            box-shadow: 0 5px 15px rgb(0 0 0 / 80%);
        }

        100% {
            transform: scale(1.05);
        }
    }

    .opportunity {
        display: flex;
    }

    .opportunity>img {
        width: 100%;
        z-index: -1;
        height: auto;
        position: absolute;
        background-color: ${props => props.theme.colorSecondary};
    }

    .opportunity>.title {
        margin-top: 16%;
        color: ${props => props.theme.primary};
        font-weight: 900;
        font-size: 7.1vw;
        align-self: center;
    }

    .opportunity>.description {
        width: 85%;
        margin-top: 5%;
        color: ${props => props.theme.color};
        font-size: 4.2vw;
        font-weight: 600;
        text-align: center;
        align-self: center;
    }

    .opportunity>.button {
        width: 80%;
        display: flex;
        padding: 5%;
        margin-top: 10%;
        cursor: pointer;
        color: ${props => props.theme.colorSecondary};
        font-size: 5vw;
        margin-bottom: 5%;
        font-weight: bold;
        align-self: center;
        border-radius: 20px;
        align-items: center;
        text-decoration: none;
        transition-duration: 0.1s;
        background-color: ${props => props.theme.backgroundColorSecondary};
        transition-timing-function: linear;
    }

    .opportunity>.button:hover {
        filter: brightness(0.9);
    }

    .mapouter {
        width: 100%;
        display: block;
        margin-top: 17.5%;
        margin-left: auto;
        margin-right: auto;
    }

    .mapouter>.gmap_canvas>#gmap_canvas{
        display: block;
    }

    @media screen and (min-width: 900px) {
        .principal {
            margin-top: 5%;
            flex-direction: row;
        }

        .principal>.container-photo {
            order: 1;
            width: 50%;
            height: 50%;
            margin-top: 0%;
            margin-right: 0%;
        }

        .principal>.container-description {
            width: 35%;
            margin: auto;
            margin-top: 0%;
            margin-left: 0%;
        }

        .principal>.container-description>.label {
            display: flex;
            font-weight: 600;
            font-size: 1.25rem;
            color: ${props => props.theme.primary};
        }

        .principal>.container-description>.title {
            margin-top: 6%;
            font-size: 3.3rem;
        }

        .principal>.container-description>.description {
            width: 70%;
            margin-top: 4%;
        }

        .principal>.container-description>.button {
            display: flex;
            margin-top: 8%;
            padding: 1vh 1vw;
            color: ${props => props.theme.colorSecondary};
            font-weight: 600;
            font-size: 1.25rem;
            align-self: center;
            border-radius: 2vw;
            white-space: nowrap;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
            align-self: flex-start;
            animation: showLeft 1s;
            justify-content: center;
            transition-duration: 0.1s;
            background-color: ${props => props.theme.backgroundColorSecondary};
            transition-timing-function: linear;
        }

        @keyframes showLeft {
            from {
                opacity: 0.8;
                transform: translateX(-100px);
            }

            to {
                opacity: 1;
                transform: translateX(0px);
            }
        }

        .principal>.container-description>.button:hover {
            filter: brightness(0.9);
        }

        .principal>.container-description>.button>svg {
            width: 4vw;
            fill: ${props => props.theme.secondary};
            margin-left: 5%;
        }

        #form-contact {
            top: 80%;
            width: 35%;
            right: 10%;
            display: flex;
            padding-top: 12%;
            position: absolute;
        }
        
        #form-contact>#form {
            width: 80%;
            padding: 5%;
            display: flex;
            align-self: center;
            margin-bottom: 10%;
            border-radius: 20px;
            background-color: ${props => props.theme.primary};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        
        #form-contact>#form>.title {
            width: 85%;
            margin-top: 5%;
            color: ${props => props.theme.colorSecondary};
            font-weight: 800;
            font-size: 2.2rem;
            margin-bottom: 8%;
            text-align: center;
            align-self: center;
        }
        
        #form-contact>#form>.field {
            display: flex;
            margin-top: 5%;
        }
        
        #form-contact>#form>.field>label {
            color: ${props => props.theme.backgroundColor};
            font-weight: bold;
            margin-bottom: 2%;
            font-size: 1.03rem;
        }
        
        #form-contact>#form>.field>input {
            padding: 4%;
            border: none;
            font-weight: bold;
            font-size: 1.12rem;
            color: ${props => props.theme.primary};
        }
        
        #form-contact>#form>.field>input:focus {
            outline: none;
        }
        
        #form-contact>#form>.button {
            border: none;
            display: flex;
            padding: 6% 5%;
            margin-top: 10%;
            cursor: pointer;
            color: ${props => props.theme.colorSecondary};
            font-weight: bold;
            font-size: 1.61rem;
            border-radius: 20px;
            align-items: center;
            transition-duration: 0.1s;
            background-color: ${props => props.theme.secondary};
            transition-timing-function: linear;
        }
        
        #form-contact>#form>.button:hover {
            filter: brightness(0.9);
        }

        .objective {
            margin-top: 5%;
            margin-bottom: -6.5%;
        }

        .objective>.button-whatsapp {
            display: none;
        }

        .objective>.photo {
            display: none;
        }

        .objective>.background {
            margin-top: -2%;
        }

        .objective>.container-description {
            width: 37%;
            margin-top: 12%;
            margin-left: 4%;
        }

        .objective>.container-description>.title {
            text-align: left;
            margin-bottom: 4%;
            font-size: 2.63rem;
        }

        .objective>.container-description>.description, .objective>.description>* {
            text-align: left;
            font-size: 1.38rem;
        }

        .objective>.container-description>.description>.highlighted {
            font-size: 1.38rem;
        }

        .objectives {
            margin-top: 10%;
        }

        .objectives>.button {
            display: none;
        }

        .objectives>.container-objetives>.objetive {
            flex-direction: row;
        }

        .objectives>.container-objetives>.objetive>.texts>.description {
            margin-top: 0%;
        }

        .objectives>.container-objetives>.objetive:nth-child(2)>.texts {
            order: -1;
        }

        .objectives>.container-objetives>.objetive>.texts>.highlighted {
            position: static;
            align-self: flex-start;
        }

        .objectives>.container-objetives>.objetive>.container-photo {
            width: 120%;
            margin: 0% 8%;
        }

        .objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.photo {
            align-self: flex-end;
        }
        
        .objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.photo {
            align-self: flex-end;
        }

        .cards {
            display: none;
        }

        .gallery>.title {
            width: 50%;
            margin-top: 0%;
            margin-bottom: 2%;
        }

        .gallery>.photos {
            width: 50%;
            align-self: center;
            grid-template-columns: repeat(3, 1fr);
        }

        .opportunity {
            display: none;
        }

        .mapouter {
            width: 100%;
            margin-top: 0vh;
        }
    }
`