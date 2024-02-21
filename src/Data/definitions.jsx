import Details from "../Model/Details";
import Question from "../Model/Question";
const def = [

    new Details(
        "function",
        `A JavaScript function is a block of code designed to perform a particular task.A JavaScript function is executed when "something" invokes it (calls it).
      `,
        "https://global.discourse-cdn.com/sitepoint/optimized/3X/a/e/ae5919fb02e7e1773dc33fdbd5db869183bff20c_2_1035x588.jpeg",
        new Question(
          "How would you call a function named myfunction",
          ["1", "2", "3"],
          "myfunction()"
        )
      ),
      new Details(
        "variable",
        `Variables are Containers for Storing Data. JavaScript Variables can be declared using var, let and const`,
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*2X5JdJr-mR62llsnX2VrzA.png",
        new Question("How would you declare a constant called foo", ["1", "2", "3"], "const foo")
      ),
      new Details(
        "props",
        `arguments passed into React components. Props are passed to components via HTML attributes.
      `,
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*H5Bao06wMbFJX1ILLd6QJA.png",
        new Question("what", ["1", "2", "3"], "4")
      ),
      new Details(
        "Usestate",
        "useState is a React Hook that lets you add a state variable to your component",
        "https://media.graphassets.com/QvKtGhSzSXe8a0851syB",
        new Question("what", ["1", "2", "3"], "4")
      ),
      new Details(
        "hooks",
        "Hooks allow function components to have access to state and other React features such as state and lifecycle methods.",
        "https://i.ytimg.com/vi/TXN6HYGLba4/maxresdefault.jpg",
        new Question("what", ["1", "2", "3"], "4")
      ),
      new Details(
        "JSX",
        `JSX (JavaScript XML) is a JavaScript extension that allows creation of Document Object Model 
        (DOM) trees using an XML-like syntax. Initially created by Facebook for use with React. JSX being a syntactic sugar, JSX is generally transpiled into nested JavaScript function calls structurally similar to the original JSX.`,
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LBg0Rq4CNkB0nq-aRlmdig.png",
        new Question("what", ["1", "2", "3"], "4")
      ),
      new Details(
        "Callback ",
        "Any function that is passed as an argument to another function so that it can be executed in that other function ",
        "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7c85x57zqotvc24jv6lc.PNG",
        new Question("what is hash", ["1", "2", "3"], "mix")
      )
]

export {def}