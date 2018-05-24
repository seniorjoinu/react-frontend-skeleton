import {TEST_LOAD_FAIL, TEST_LOAD_SUCCESS} from "./actions";

const initialTestState = {
    tests: [],
    error: null
};

const testReducer = (state = initialTestState, action) => {
    switch (action.type) {
        case TEST_LOAD_SUCCESS:
            return {
                tests: [...state.tests, action.payload],
                error: null
            };

        case TEST_LOAD_FAIL:
            return {
                tests: state.tests,
                error: 'Load failed =C'
            };

        default:
            return state;
    }
};

export default {
    test: testReducer
}