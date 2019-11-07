<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sudokuuu</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <link href="style.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet" />

</head>

<body>
    <header>
        <h1>Sudoku</h1>
    </header>
    <div id="app-sudoku">
        <div class="buttons-container">
            <button class="button" v-on:click="initializeGame()"><span>{{ initializeGameText }}</span></button>
        </div>
        <transition name="fade">
            <div class="grid-sudoku" v-if="isGameStarted && !showAnswer">
                <div v-for="(row, indexRow) in sudokuMatrix" class="grid-row">
                    <div v-for="(cell, indexCell) in row" class="grid-cell">
                        <input type="text" v-bind:key="cell.num" v-model="cell.num"
                            @change="formatCell(indexRow, indexCell)" @keypress="onlyNumber" class="grid-cell-editor"
                            :class="{'blue': cell.readOnly}" :readonly="cell.readOnly" />
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="showAnswer" class="answer">
                <img v-bind:src="answerImage" class="answer-image" />
            </div>
        </transition>
        <transition name="fade">
            <button class="button mt-25" v-on:click="evaluateGame()"
                v-if="isGameStarted"><span>{{ evaluateGameText }}</span></button>
        </transition>
    </div>
    <script src="app.js"></script>
    <script src="sudoku.js"></script>
</body>

</html>