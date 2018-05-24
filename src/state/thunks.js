import {TEST_LOAD, TEST_LOAD_FAIL, TEST_LOAD_SUCCESS} from "./actions";
import {doAction} from "../index";

const loadTest = () => {
    doAction(TEST_LOAD);

    const requestTime = Math.random() * 1000;
    const success = Math.random() > 0.5;
    const testPostfix = Math.round(Math.random() * 100);

    setTimeout(() => {
        if (success) doAction(TEST_LOAD_SUCCESS, `test ${testPostfix}`);
        else doAction(TEST_LOAD_FAIL);
    }, requestTime)
};

export default loadTest;