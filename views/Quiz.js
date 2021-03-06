import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import globalStyles from "../utils/globalStyles";
import CustomStatusBar from "../components/CustomStatusBar";
import QuizHeader from "../components/QuizHeader";
import Question from "../components/Question";
import QuizResults from "../components/QuizResults";

class Quiz extends Component {
  state = {
    currentQuestionIndex: 0,
    answeredCorrectly: 0,
    quizComplete: false,
  };

  handleQuestionAnswered = (answeredCorrectly) => {
    if (answeredCorrectly) {
      this.setState({ answeredCorrectly: this.state.answeredCorrectly + 1 });
    }

    if (this.state.currentQuestionIndex === this.props.questions.length - 1) {
      this.setState({ quizComplete: true });
    } else {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1,
      });
    }
  };

  handleStartQuizAgain = () => {
    this.setState({
      currentQuestionIndex: 0,
      answeredCorrectly: 0,
      quizComplete: false,
    });
  };

  render() {
    const { questions } = this.props;
    const {
      currentQuestionIndex,
      answeredCorrectly,
      quizComplete,
    } = this.state;
    const currentQuestionObject = questions[currentQuestionIndex];

    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <CustomStatusBar />

        <View style={(globalStyles.viewContainer, { flex: 1 })}>
          <QuizHeader
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />

          {quizComplete ? (
            <QuizResults
              questionsAnsweredCorrectly={answeredCorrectly}
              totalQuestions={questions.length}
              onStartQuizAgain={this.handleStartQuizAgain}
            />
          ) : (
            <Question
              questionObject={currentQuestionObject}
              onQuestionAnswered={this.handleQuestionAnswered}
            />
          )}
        </View>
      </View>
    );
  }
}

function mapStateToProps(decks, { route }) {
  const { deckId } = route.params;

  return {
    deckId,
    questions: decks[deckId].questions,
  };
}

export default connect(mapStateToProps)(Quiz);
