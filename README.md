# Frontend-Application-21-22

Dit is een repo voor de cursus [Frontend Applications:](https://github.com/cmda-tt/course-21-22) `@CMD Hogeschool van Amsterdam`.
Tijdens deze cursus komen onderwerpen als **functioneel programmeren**, **gegevens opschonen**, **JS-frameworks** en het maken van **datavisualisaties** aan de orde. Via de [Wiki](https://github.com/randy554/Frontend-Applications-21-22/wiki) zal ik mijn voortgang en bevindingen delen.


## Assignment & Assessment

<details>

 #### Assignment
Create a client-side application in JavaScript which dynamically renders data to views using either a front-end framework or system created by you. Reflect on the merits and costs of frameworks together.

 <!--
Maak een client-side applicatie in JavaScript die data dynamisch weergeeft door middel van een front-end framework. Reflecteer over de voor en nadelen van het gebruiken van een framework.  
-->

<!--lint disable no-html maximum-line-length-->
 
 
 #### Assessment

<table>
  <thead>
    <tr>
      <th></th>
      <th><strong>1-2</strong></th>
      <th><strong>3-4</strong></th>
      <th><strong>5-6</strong></th>
      <th><strong>7-8</strong></th>
      <th><strong>9-10</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th align="center" scope="row"><strong>Application</strong> of subject matter</th>
      <td align="center">Git and npm are used; the project runs without errors; data is loaded; there is a view that represents the data</td>
      <td align="center"><strong>Views are rendered dynamically from data</strong>; interpreting the representation is easier that interpreting the raw data itself</td>
      <td align="center"><strong>Data can be read and changed; changes to data are reflected in the interface; changes persist across page reloads</strong></td>
      <td align="center">Views go beyond an example or tutorial: there are demonstrable additions <strong>like routing or creating data</strong></td>
      <td align="center">😱<br>The way the student applies subject matter is more advanced than what they were taught in class; let’s switch places</td>
    </tr>
    <tr>
      <th align="center" scope="row">Understanding</th>
      <td align="center">There is substantial own code and the student can explain how the project was created</td>
      <td align="center">The student can explain some parts of their code, how some parts works together, and some technical choices</td>
      <td align="center">Student understands how components, state, lifecycle works in their app. The project is structured logically. Merits of frameworks can be explained</td>
      <td align="center">The project is complex but can easily be understood; student used or wrote code not covered in class that was carefully chosen while weighing alternatives</td>
      <td align="center">🤓<br>The student deeply understands their code and a geeky / nerdy conversation can be held about this</td>
    </tr>
    <tr>
      <th align="center" scope="row">Quality</th>
      <td align="center">The project is handed in on time, working, documented, and on GitHub</td>
      <td align="center">Code style is consistent; code and project  are partially documented</td>
      <td align="center">Code adheres to standards; docs cover what the project is and does</td>
      <td align="center">Code quality is good and enforced; docs are useful and professional</td>
      <td align="center">📚<br>Code and docs both read like great books</td>
    </tr>
    <tr>
      <th align="center" scope="row">Process</th>
      <td align="center">Process is partially documented</td>
      <td align="center">Process is properly documented</td>
      <td align="center">Choices are evaluated and documented; progress is demonstrated; Work tells a story</td>
      <td align="center">Significant progress or iterations are demonstrated; Storytelling principles are applied</td>
      <td align="center">💪<br>What you did this course is amazing; Teachers are in awe of your progress</td>
    </tr>
  </tbody>
</table>

> **Note**: each of this rubric’s rows is cumulative: for example, to get a 5-6
> on application, you also need to have a 1-2 and 3-4. In addition, each row has to be awarded with a >=5.5 in order to receive a passing grade for this course.
> Bonus points can be rewarded when you've helped fellow students progress. But only if you already have a passing grade.

<!--lint enable no-html maximum-line-length-->
<summary>Rubric</summary>
</details>
 

 ## Concept
 
 
 #### [Live demo](https://frontend-applications-21-22.vercel.app/)
 
Op deze website kunt u zien hoeveel corona-gerelateerde artikelen de afgelopen tijd door media zijn gepubliceerd. De gegevens worden weergegeven via een proportional area chart. Een paar features van de app:

* Het aantal gepubliceerde artikelen zien via een hover op de cirkel. 
* Filter op binnenlandse/buitenlandse media.

 [![concept-with-hover-cut.gif](https://i.postimg.cc/rmLYxdnW/concept-with-hover-cut.gif)](https://postimg.cc/JyPqWhW4)
 
 [![concept-with-filter.gif](https://i.postimg.cc/vTQdS37z/concept-with-filter.gif)](https://postimg.cc/G8SN4P58)
 
 ## Inhoudsopgave
 
 - [Frontend-Application-21-22](#frontend-application-21-22)
  * [Assignment & Assessment](#assignment---assessment)
  * [Concept](#concept)
  * [Inhoudsopgave](#inhoudsopgave)
  * [API](#api)
  * [Installatie](#installatie)
  * [Credits](#credits)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)



 
 ## API
 
Om nieuwsartikelen te krijgen heb ik gebruik gemaakt van de [NewsAPI](https://newsapi.org/). Na het aanmaken van een gratis account, ontvang je een **key** om aan de slag te gaan. De **NewsAPI** biedt verschillende endpoints aan voor verschillende doeleinden. Voor dit project maak ik gebruik van het [Everything endpoint](https://newsapi.org/docs/endpoints/everything). Dit endpoint retourneert een uitgebreide lijst met artikelen uit meer dan 80.000 grote en kleine nieuwsbronnen en blogs.
 
 ### Everything endpoint:
 
 ```Javascript
 `https://newsapi.org/v2/everything?qInTitle=${phrases}&language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
 ```


| **API paramater** | **Omschrijving** | 
|:---------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------| 
| api_key | De api_key die je hebt ontvangen bij het maken van een account. | 
| InqTitle | Het woord waarnaar je wilt zoeken in de titel van het artikel. | 
| language | De taal waarin je artikelen wilt krijgen. | 
| pagesize | Het aantal artikelen die je per pagina wilt ontvangen. | 
| page | Voor het berekenen van pagination. | 


### Response data:

[![carbon.png](https://i.postimg.cc/50bp5Jty/carbon.png)](https://postimg.cc/rdZScvx2)

 
  ## Installatie
  
  
### 1. Clone deze repo

    git clone https://github.com/randy554/Frontend-Applications-21-22.git
    
### 2. Navigeer naar de root van de app

    cd Frontend-Applications-21-22

### 3. Open index.html & bekijk de site

    http://localhost:3001/
    
## Credits

#### Docenten/coaches
- [Vincent Vijn](https://github.com/vijnv)
- [Angelo Michel](https://github.com/angelomichel)


#### Team 3
 - Alle leden van **Team 3**

 
## Bronnen
 - [D3](https://d3js.org/)
 - [D3 in Depth](https://www.d3indepth.com/)
 - [D3 Tutorial from Samuel Gratzl](https://github.com/sgratzl/d3tutorial)
 - [Carbon source code images](https://carbon.now.sh/) 
 - [Gyazo gif maker](https://gyazo.com/captures)
 - [Postimage](https://postimages.org/)
 - [News API](https://newsapi.org/docs/endpoints/everything#sources)
 - [SVG Tutorial from Curran Kelleher](https://www.youtube.com/watch?v=ysG9j4_Uw_g)

 
## Licentie

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

