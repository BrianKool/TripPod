import React from 'react';
import renderer from "react-test-renderer";
import AppText from '../Component/AppText';
import LoginScreen from '../Screen/LoginScreen';





test("AppText style render well", () => {
    const json = renderer.create(<AppText/>).toJSON();
    console.log(json);
    expect(json.props.style[0].color).toBe("black");
});

test("AppText text render well", () => {
    const json = renderer.create(<AppText>AppText should be here</AppText>).toJSON();
    console.log(json);
    expect(json.children[0]).toBe("AppText should be here");
    //expect(json.children.inlcudes("AppText should be here"));
});

test("Login Screen with right username and password", () => {
    const json = renderer.create(<LoginScreen/>).toJSON();
    console.log(json);
});

