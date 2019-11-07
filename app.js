var sudokuApp = new Vue({
    el: '#app-sudoku',

    data: {
        sudokuMatrix: [],
        initializeGameText: "Start!",
        evaluateGameText: "Verify!",
        answerImage: "",
        isGameStarted: false,
        showAnswer: false
    },

    methods: {
        initializeGame() {
            var defaultSudokuMatrix = generate();

            // Empty random cells per row
            for (var i = 0; i < defaultSudokuMatrix.length; ++i) {
                for (var k = 0; k < 4; ++k) {
                    var randomColumnIndex = Math.floor(Math.random() * defaultSudokuMatrix.length);
                    defaultSudokuMatrix[i][randomColumnIndex].num = "";
                    defaultSudokuMatrix[i][randomColumnIndex].readOnly = false;
                }
            }

            this.sudokuMatrix = defaultSudokuMatrix;
            this.initializeGameText = "New game";
            this.isGameStarted = true;
        },

        evaluateGame() {
            var result = sudoku.map((x, i) => sudoku[i].map(y => y.num));
            var maxtrixCheck = this.sudokuMatrix.map((x, i) => this.sudokuMatrix[i].map(y => y.num));

            if (JSON.stringify(result) === JSON.stringify(maxtrixCheck)) {
                this.answerImage = "success.gif";
                this.showAnswer = true;
                this.isGameStarted = false;

                setTimeout(() => {
                    this.showAnswer = false;
                    this.isGameStarted = true;
                }, 2000);
            }
            else {
                this.answerImage = "fail.gif";
                this.showAnswer = true;
                this.isGameStarted = false;

                setTimeout(() => {
                    this.showAnswer = false;
                    this.isGameStarted = true;
                }, 2000);
            }
        },

        formatCell(row, cell) {
            if (this.sudokuMatrix[row][cell].num.length > 1) {
                this.sudokuMatrix[row][cell].num = this.sudokuMatrix[row][cell].num[1];
            }
        },

        onlyNumber($event) {
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);

            if (keyCode < 48 || keyCode > 57) {
                $event.preventDefault();
            }
        }
    }
});
