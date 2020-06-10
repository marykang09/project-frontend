// import { connect } from 'react-redux'
// import SequenceForm from './SequenceForm'
// import { orderSequencePoseList } from '../redux/actions'

// const mapStateToProps = (state, ownProps) => {
//     let sequenceId = parseInt(ownProps.match.params.id)

//     return {
//         sequence_poses: state.sequences.find(s => parseInt(s.id) === sequenceId).sequence_poses
//     }
// }

// const mapDispatchToProps = (dispatch, props) => ({
//     orderSequencePoseList: ({ sequenceId, oldIndex, newIndex }) => {
//         dispatch (orderSequencePoseList(sequenceId, oldIndex, newIndex))
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(SequenceForm)