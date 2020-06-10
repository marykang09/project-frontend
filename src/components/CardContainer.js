// import React from 'react'
// ////// tutorial ////////
// import Card from './Card'
// import { DndProvider } from 'react-dnd';
// import {Backend} from 'react-dnd-html5-backend';
// const update = require('immutability-helper')

// class CardContainer extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             cards: [
//                 {
//                   id: 1,
//                   text: 'Write a cool JS library',
//                 },
//                 {
//                   id: 2,
//                   text: 'Make it generic enough',
//                 },
//                 {
//                   id: 3,
//                   text: 'Write README',
//                 },
//                 {
//                   id: 4,
//                   text: 'Create some examples',
//                 },
//                 {
//                   id: 5,
//                   text:
//                     'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
//                 },
//                 {
//                   id: 6,
//                   text: '???',
//                 },
//                 {
//                   id: 7,
//                   text: 'PROFIT',
//                 },
//               ]
//         }
//     }

//     /////////////////////////// this is part of the tutorial ///////////////////////////
//     moveCard = (dragIndex, hoverIndex) => {
//         const { cards } = this.state
//         const dragCard = cards[dragIndex]
    
//         this.setState(
//           update(this.state, {
//             cards: {
//               $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
//             },
//           }),
//         )
//     }
//     /////////////////////////// this is part of the tutorial ///////////////////////////

//     render(){
//         // console.log("SequenceForm's props", this.props)

//         return (!this.props.sequence ? null : 
//                 <div>
//                     <DndProvider backend={Backend}>
//                     {/* ///////////////////// adding the card container div here as i follow along with the tutuorial ///////////////////// */}
//                     <div className="card-container">
//                             {this.state.cards.map((card, i) => (
//                                 <Card
//                                     key={card.id}
//                                     index={i}
//                                     id={card.id}
//                                     text={card.text}
//                                     moveCard={this.moveCard} />
//                             ))}
//                      </div>
//                         {/* ///////////////////// adding the card container div here as i follow along with the tutuorial ///////////////////// */}
//                     </DndProvider>
//                 </div>
//         )
//     }
// }

// // export default DragDropContext(HTML5Backend)(CardContainer);