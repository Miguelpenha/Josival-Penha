import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        color: #0F0F0F;
        flex-direction: column;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Raleway', sans-serif;
        scrollbar-color: #00AFEF #F2F2F2;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: #F2F2F2;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 16px;
        background-color: #00AFEF;
    }

    *::selection {
        background-color: #00AFEF;
    }

    .show {
        opacity: 0.1;
        position: relative;
        transition: 1s all ease;
        transform: translateY(150px);
    }

    .show.active {
        opacity: 1;
        transform: translateY(0);
    }

    body {
        display: flex;
        background-color: #FFFFFF;
    }

    header {
        padding: 4%;
        display: flex;
        background-color: #00AFEF;
    }

    header>img {
        width: 65%;
        height: auto;
        align-self: center;
    }

    main {
        display: flex;
    }

    main>.principal {
        width: 85%;
        display: flex;
        align-self: center;
    }

    main>.principal>.container-photo {
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        margin-top: 8%;
        position: relative;
    }

    main>.principal>.container-photo>.photo {
        width: 100%;
        height: auto;
    }

    main>.principal>.container-photo>.photo-animation {
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

    main>.principal>.container-description {
        display: flex;
        margin-top: 8%;
    }

    main>.principal>.container-description>.label {
        display: none;
    }

    main>.principal>.container-description>.title {
        color: #2F2F2F;
        font-weight: 900;
        font-size: 2.51rem;
    }

    main>.principal>.container-description>.description {
        display: flex;
        margin-top: 6%;
        color: #403F3F;
        font-weight: 600;
        font-size: 1.27rem;
    }

    main>.principal>.container-description>.button {
        display: none;
    }

    main>#form-contact {
        display: none;
    }

    main>.objective {
        display: flex;
        margin-top: 10%;
    }

    main>.objective>.button-whatsapp {
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

    main>.objective>.button-whatsapp:hover {
        background-color: #07aa71;
    }

    main>.objective>.button-whatsapp>img {
        width: 6.1vw;
        height: 6.1vw;
    }

    main>.objective>.button-whatsapp>span {
        font-size: 4vw;
        color: #FFFFFF;
        padding-left: 5%;
        font-weight: bold;
    }

    main>.objective>.photo {
        width: 70%;
        z-index: -1;
        height: auto;
        margin-top: 10%;
        align-self: center;
    }

    main>.objective>.background {
        width: 100%;
        z-index: -1;
        height: auto;
        margin-top: 114%;
        position: absolute;
    }

    main>.objective>.container-description {
        display: flex;
        margin-top: 0%;
    }

    main>.objective>.container-description>.title {
        width: 85%;
        color: #FEFEFE;
        font-weight: bold;
        font-size: 1.89rem;
        text-align: center;
        align-self: center;
    }

    main>.objective>.container-description>.description, main>.objective>.container-description>.description>* {
        width: 85%;
        margin-top: 5%;
        color: #FEFEFE;
        font-size: 1.09rem;
        align-self: center;
        text-align: center;
        font-weight: normal;
    }

    main>.objective>.container-description>.description>.highlighted {
        font-weight: bold;
    }

    main>.objectives {
        width: 100%;
        display: flex;
        align-self: center;
        background-color: #F2F2F2;
    }

    main>.objectives>.container-objetives {
        display: flex;
        margin-bottom: 2%;
        align-items: center;
        flex-direction: column;
    }

    main>.objectives>.container-objetives>.objetive {
        width: 80%;
        display: flex;
        margin-top: 2%;
        flex-direction: column;
    }

    main>.objectives>.container-objetives>.objetive>.container-photo {
        width: 100%;
        display: flex;
        position: relative;
        margin: 0% 8% 0% 0%;
    }

    main>.objectives>.container-objetives>.objetive>.container-photo>.photo {
        width: 100%;
        height: auto;
    }

    main>.objectives>.container-objetives>.objetive>.container-photo>.icon {
        width: 18%;
        position: absolute;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon {
        fill: #ED3237;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon {
        fill: #0094D4;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(2) {
        top: 12%;
        left: 5%;
        transform: rotate(-5deg);
        animation: balance1 5s infinite;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(3) {
        top: 40%;
        left: -15%;
        transform: rotate(-5deg);
        animation: balance1 5s infinite;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(4) {
        top: 70%;
        left: -20%;
        fill: #D1D1D1;
        transform: rotate(-5deg);
        animation: balance1 5s infinite;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(5) {
        top: 30%;
        right: -15%;
        fill: #D1D1D1;
        transform: rotate(0deg);
        animation: balance2 5s infinite;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.icon:nth-child(6) {
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

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(2) {
        top: 2%;
        left: 25%;
        width: 15%;
        animation: balanceStar 17s infinite linear;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(3) {
        top: 20%;
        left: 5%;
        width: 12%;
        fill: #D1D1D1;
        transform: rotate(-15deg);
        animation: balanceStar 17s infinite linear;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(4) {
        top: 2%;
        right: -5%;
        fill: #0094D4;
        animation: balanceStar 17s infinite linear;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(5) {
        top: 25%;
        width: 14%;
        right: -8%;
        fill: #0094D4;
        animation: balanceStar 17s infinite linear;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.icon:nth-child(6) {
        top: 45%;
        width: 12%;
        right: -5%;
        fill: #D1D1D1;
        animation: balanceStar 17s infinite linear;
    }

    main>.objectives>.container-objetives>.objetive>.texts {
        display: flex;
        align-self: center;
        position: relative;
        height: fit-content;
    }

    main>.objectives>.container-objetives>.objetive>.texts>.description {
        margin-top: 20%;
        font-size: 1.1rem;
    }

    main>.objectives>.container-objetives>.objetive>.texts>.description>.highlighted {
        font-weight: bold;
    }

    main>.objectives>.container-objetives>.objetive>.texts>.highlighted {
        display: flex;
        padding: 0.8rem;
        margin-bottom: 8%;
        align-self: center;
        position: absolute;
        border-radius: 10px;
        flex-direction: row;
        align-items: center;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.texts>.highlighted {
        width: 11rem;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.texts>.highlighted {
        width: 16rem;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.texts>.highlighted {
        top: -15%;
        background-color: #ED3237;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.texts>.highlighted {
        top: -20%;
        background-color: #0094D4;
    }

    main>.objectives>.container-objetives>.objetive>.texts>.highlighted>.icon {
        fill: #FFD600;
        margin-left: auto;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(1)>.texts>.highlighted>.icon {
        width: 2rem;
    }

    main>.objectives>.container-objetives>.objetive:nth-child(2)>.texts>.highlighted>.icon {
        width: 2.5rem;
    }

    main>.objectives>.container-objetives>.objetive>.texts>.highlighted>.texts {
        display: flex;
        flex-direction: column;
    }

    main>.objectives>.container-objetives>.objetive>.texts>.highlighted>.texts>.text:nth-child(1) {
        color: #FEFEFE;
        font-weight: 600;
        font-size: 1.15rem;
    }

    main>.objectives>.container-objetives>.objetive>.texts>.highlighted>.texts>.text:nth-child(2) {
        color: #FFD600;
        font-size: 1.75rem;
        font-weight: bolder;
    }

    main>.objectives>.button {
        width: 70%;
        display: flex;
        padding: 4.5% 5%;
        margin-top: 10%;
        cursor: pointer;
        color: #FEFEFE;
        font-size: 1.6rem;
        margin-bottom: 5%;
        font-weight: bold;
        align-self: center;
        white-space: nowrap;
        border-radius: 20px;
        align-items: center;
        text-decoration: none;
        transition-duration: 0.1s;
        background-color: #FFD600;
        transition-timing-function: linear;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    main>.objectives>.button:hover {
        background-color: #d4b20b;
    }

    main>.cards {
        width: 100%;
        display: none;
        background-color: #F2F2F2;
    }

    main>.cards>.list {
        display: flex;
        list-style: none;
        overflow-x: scroll;
        flex-direction: row;
        scroll-snap-type: x mandatory;
    }

    main>.cards>.list::-webkit-scrollbar {
        display: none;
    }

    main>.cards>.list>.card {
        margin: 2.5%;
        padding: 1rem;
        min-width: 13.13rem;
        border-radius: 10px;
        scroll-snap-align: center;
        background-color: #0094d4;
    }

    main>.cards>.list>.card>.title {
        color: #FFD600;
        font-size: 1.4rem;
        text-align: center;
    }

    main>.cards>.list>.card>.text {
        display: flex;
        margin-top: 10%;
        color: #FEFEFE;
        font-size: 1rem;
    }

    main>.gallery {
        padding: 5%;
        display: flex;
        background-color: #ED3237;
    }

    main>.gallery>.title {
        width: 90%;
        margin-top: 4%;
        margin-bottom: 10%;
        align-self: center;
    }

    main>.gallery>.title, main>.gallery>.title>* {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 1.58rem;
        text-align: center;
    }

    main>.gallery>.title>.highlighted {
        color: #FFD600;
    }

    main>.gallery>.photos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    main>.gallery>.photos {
        gap: 2vw;
    }

    main>.gallery>.photos>img {
        width: 100%;
        height: auto;
        padding: 3.5% 2.5%;
    }

    main>.gallery>.photos>img {
        padding: 0%;
        cursor: pointer;
        border-radius: 20px;
        transition-duration: 0.15s;
        transition-timing-function: linear;
    }

    main>.gallery>.photos>img:hover {
        transform: scale(1.05);
        filter: brightness(0.8);
        background-color: rgb(135, 20, 24);
        animation: floatImage 1s infinite linear;
        box-shadow: 0 5px 15px rgb(135 20 24 / 50%);
    }

    @keyframes floatImage {
        50% {
            transform: scale(1);
            box-shadow: 0 5px 15px rgb(135 20 24 / 80%);
        }

        100% {
            transform: scale(1.05);
        }
    }

    main>.opportunity {
        display: flex;
    }

    main>.opportunity>img {
        width: 100%;
        z-index: -1;
        height: auto;
        position: absolute;
        background-color: #F2F2F2;
    }

    main>.opportunity>.title {
        margin-top: 16%;
        color: #0094D4;
        font-weight: 900;
        font-size: 7.1vw;
        align-self: center;
    }

    main>.opportunity>.description {
        width: 85%;
        margin-top: 5%;
        color: #2F2F2F;
        font-size: 4.2vw;
        font-weight: 600;
        text-align: center;
        align-self: center;
    }

    main>.opportunity>.button {
        width: 80%;
        display: flex;
        padding: 5%;
        margin-top: 10%;
        cursor: pointer;
        color: #FEFEFE;
        font-size: 5vw;
        margin-bottom: 5%;
        font-weight: bold;
        align-self: center;
        border-radius: 20px;
        align-items: center;
        text-decoration: none;
        transition-duration: 0.1s;
        background-color: #ED3237;
        transition-timing-function: linear;
    }

    main>.opportunity>.button:hover {
        background-color: #c12429;
    }

    main>.mapouter {
        width: 100%;
        display: block;
        margin-top: 17.5%;
        margin-left: auto;
        margin-right: auto;
    }

    main>.mapouter>.gmap_canvas>#gmap_canvas{
        display: block;
    }

    footer>.social {
        display: flex;
        padding: 6% 25%;
        flex-direction: row;
        background-color: #0094d4;
        justify-content: space-evenly;
    }

    footer>.social>.logo {
        width: 7vw;
        height: auto;
    }

    footer>.message {
        display: none;
    }

    footer>.rights {
        padding: 8%;
        display: flex;
        background-color: #ED3237;
    }

    footer>.rights>.logo {
        width: 55%;
        align-self: center;
    }

    footer>.rights>.text {
        margin-top: 8%;
        font-size: 2.8vw;
        color: #FEFEFE;
        font-weight: 600;
        align-self: center;
    }

    @media screen and (min-width: 900px) {
        header {
            padding: 2%;
        }

        header>img {
            width: 11.7%;
            margin-left: 5.5%;
            align-self: flex-start;
        }

        main>.principal {
            margin-top: 5%;
            flex-direction: row;
        }

        main>.principal>.container-photo {
            order: 1;
            width: 50%;
            height: 50%;
            margin-top: 0%;
            margin-right: 0%;
        }

        main>.principal>.container-description {
            width: 35%;
            margin: auto;
            margin-top: 0%;
            margin-left: 0%;
        }

        main>.principal>.container-description>.label {
            display: flex;
            font-weight: 600;
            color: #00AFEF;
            font-size: 1.25rem;
        }

        main>.principal>.container-description>.title {
            margin-top: 6%;
            font-size: 3.3rem;
        }

        main>.principal>.container-description>.description {
            width: 70%;
            margin-top: 4%;
        }

        main>.principal>.container-description>.button {
            display: flex;
            margin-top: 8%;
            padding: 1vh 1vw;
            color: #FEFEFE;
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
            background-color: #ED3237;
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

        main>.principal>.container-description>.button:hover {
            background-color: #c12429;
        }

        main>.principal>.container-description>.button>svg {
            width: 4vw;
            fill: #FFD600;
            margin-left: 5%;
        }

        main>#form-contact {
            top: 80%;
            width: 35%;
            right: 10%;
            display: flex;
            padding-top: 12%;
            position: absolute;
        }
        
        main>#form-contact>#form {
            width: 80%;
            padding: 5%;
            display: flex;
            align-self: center;
            margin-bottom: 10%;
            border-radius: 20px;
            background-color: #0094D4;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        
        main>#form-contact>#form>.title {
            width: 85%;
            margin-top: 5%;
            color: #FEFEFE;
            font-weight: 800;
            font-size: 2.2rem;
            margin-bottom: 8%;
            text-align: center;
            align-self: center;
        }
        
        main>#form-contact>#form>.field {
            display: flex;
            margin-top: 5%;
        }
        
        main>#form-contact>#form>.field>label {
            color: #FFFFFF;
            font-weight: bold;
            margin-bottom: 2%;
            font-size: 1.03rem;
        }
        
        main>#form-contact>#form>.field>input {
            padding: 4%;
            border: none;
            color: #0094D4;
            font-weight: bold;
            font-size: 1.12rem;
        }
        
        main>#form-contact>#form>.field>input:focus {
            outline: none;
        }
        
        main>#form-contact>#form>.button {
            border: none;
            display: flex;
            padding: 6% 5%;
            margin-top: 10%;
            cursor: pointer;
            color: #FEFEFE;
            font-weight: bold;
            font-size: 1.61rem;
            border-radius: 20px;
            align-items: center;
            transition-duration: 0.1s;
            background-color: #FFD600;
            transition-timing-function: linear;
        }
        
        main>#form-contact>#form>.button:hover {
            background-color: #d4b20b;
        }

        main>.objective {
            margin-top: 5%;
            margin-bottom: -6.5%;
        }

        main>.objective>.button-whatsapp {
            display: none;
        }

        main>.objective>.photo {
            display: none;
        }

        main>.objective>.background {
            margin-top: -2%;
        }

        main>.objective>.container-description {
            width: 37%;
            margin-top: 12%;
            margin-left: 4%;
        }

        main>.objective>.container-description>.title {
            text-align: left;
            margin-bottom: 4%;
            font-size: 2.63rem;
        }

        main>.objective>.container-description>.description, main>.objective>.description>* {
            text-align: left;
            font-size: 1.38rem;
        }

        main>.objective>.container-description>.description>.highlighted {
            font-size: 1.38rem;
        }

        main>.objectives {
            margin-top: 10%;
        }

        main>.objectives>.button {
            display: none;
        }

        main>.objectives>.container-objetives>.objetive {
            flex-direction: row;
        }

        main>.objectives>.container-objetives>.objetive>.texts>.description {
            margin-top: 0%;
        }

        main>.objectives>.container-objetives>.objetive:nth-child(2)>.texts {
            order: -1;
        }

        main>.objectives>.container-objetives>.objetive>.texts>.highlighted {
            position: static;
            align-self: flex-start;
        }

        main>.objectives>.container-objetives>.objetive>.container-photo {
            width: 120%;
            margin: 0% 8%;
        }

        main>.objectives>.container-objetives>.objetive:nth-child(1)>.container-photo>.photo {
            align-self: flex-end;
        }
        
        main>.objectives>.container-objetives>.objetive:nth-child(2)>.container-photo>.photo {
            align-self: flex-end;
        }

        main>.cards {
            display: none;
        }

        main>.gallery>.title {
            width: 50%;
            margin-top: 0%;
            margin-bottom: 2%;
        }

        main>.gallery>.photos {
            width: 50%;
            align-self: center;
            grid-template-columns: repeat(3, 1fr);
        }

        main>.opportunity {
            display: none;
        }

        main>.mapouter {
            width: 100%;
            margin-top: 0vh;
        }

        footer>.social {
            padding: 4% 35%;
        }

        footer>.social>.logo {
            width: 3vw;
        }

        footer>.message {
            padding: 4%;
            display: block;
            background-color: #ED3237;
        }
        
        footer>.message>h3 {
            color: #FEFEFE;
            font-size: 2.2rem;
            font-weight: bold;
            text-align: center;
        }

        footer>.rights {
            display: none;
        }
    }
`