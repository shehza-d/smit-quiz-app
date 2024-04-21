import { useState, useContext } from "react";
import axios from "axios";
import Button from "../ui/Button";
// import { GlobalContext } from "../../context/context";
// import useDoc from "../../hooks/useDoc";
import type { Dispatch, SetStateAction } from "react";
import { IMcq } from "../../types";

const supportedLanguage = [
  "html",
  "css",
  "javascript",
  "js",
  "jsx",
  "json",
  "text",
  "typescript",
  "ts",
  "tsx",
  "python",
];

interface IProps {
  setMCQs: Dispatch<SetStateAction<IMcq[]>>;
  setShowCodeBlockFormModel: Dispatch<SetStateAction<boolean>>;
}

export default function CodeForm(Props: IProps) {
  const { setMCQs, setShowCodeBlockFormModel } = Props;

  //   const { state, dispatch } = useContext(GlobalContext);
  //   const { postCode, isLoading } = useDoc();
  const [codeTitle, setCodeTitle] = useState("");
  const [selectedLang, setSelectedLang] = useState("");
  const [codeBlock, setCodeBlock] = useState("");

  const checkCode = async (e: any) => {
    setCodeBlock(e.target.value);
    let formData = new FormData();
    formData.append("content", e.target.value);
    const res = await axios.post(
      "https://dpaste.com/api/v2/guess-syntax/",
      formData
    );
    // console.log(res.data[1]);
    setSelectedLang(res.data[1]);
  };

  const handleData = async (e: any) => {
    e.preventDefault();
    const [select, tit, code] = e.target;
    if (!select.value || !tit.value || !code.value) {
      return;
    }
    const data = {
      codeTitle,
      codeBlock,
      codeLang: selectedLang,
      contentType: "code",
    };
    // postCode(data);
    // onClose();
  };

  //   const bg_c = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  const focus = { bg: "whiteAlpha.300" };

  return (
    <>
      <form onSubmit={handleData}>
        {/* <input
          // bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
          // border={0}
          // _focus={{  bg: "whiteAlpha.300",}}
          id="codeTitle"
          name="codeTitle"
          value={codeTitle}
          onChange={(e) => setCodeTitle(e.target.value)}
          placeholder="Enter Code Title Here..."
        /> */}

        <textarea
          value={codeBlock}
          onChange={checkCode}
          placeholder="Insert Your Code Here"
          className="w-full border-2"
          // my={1}
          // border={0}
          // bg={bg_c}
          // _focus={focus}
        />
        <select
          // bg={bg_c}
          // _focus={focus}
          // border={0}
          // my="1"
          placeholder="Select Syntax"
          onChange={(e) => setSelectedLang(e.target.value)}
          value={selectedLang}
        >
          {supportedLanguage.map((lang, index) => {
            return (
              <option key={index} value={lang}>
                {lang}
              </option>
            );
          })}
        </select>
        <div>
          <Button
            type="submit"
            // isLoading={isLoading}
            onClick={() => setShowCodeBlockFormModel(false)}
          >
            Add Code
          </Button>
          {/* <Button onClick={() => handleBlock(false)} >Go Back</Button> */}
        </div>
      </form>
      {/* <DocList type={"code"} /> */}
    </>
  );
}
