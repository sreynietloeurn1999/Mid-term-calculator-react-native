import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;

      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;

      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;

      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear;
        setResult(0);
        break;
    }
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 10, color: myColors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }

    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return;
      <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
        {firstNumber}
      </Text>;
    }
  };

  if (firstNumber.length > 7) {
    return;
    <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
      {firstNumber}
    </Text>;
  }

  return (
    <View style={Styles.viewButtom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "grey", fontSize: 40, fontWeight: "400" }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>

      <View style={Styles.row}>
        <Button tittle="+" isGray onPress={() => handleOperationPress("+")} />
        <Button tittle="-" isGray onPress={() => handleOperationPress("-")} />
        <Button tittle="*" isGray onPress={() => handleOperationPress("*")} />
        <Button tittle="/" isGray onPress={() => handleOperationPress("/")} />
      </View>

      <View style={Styles.row}>
        <Button tittle="1" isGray onPress={() => handleNumberPress("1")} />
        <Button tittle="2" isGray onPress={() => handleNumberPress("2")} />
        <Button tittle="3" isGray onPress={() => handleNumberPress("3")} />
        <Button tittle="=" isGray onPress={() => getResult()} />
      </View>

      <View style={Styles.row}>
        <Button tittle="4" isGray onPress={() => handleNumberPress("4")} />
        <Button tittle="5" isGray onPress={() => handleNumberPress("5")} />
        <Button tittle="6" isGray onPress={() => handleNumberPress("6")} />
        <Button tittle="C" isGray onPress={clear} />
      </View>

      <View style={Styles.row}>
        <Button tittle="7" isGray onPress={() => handleNumberPress("7")} />
        <Button tittle="8" isGray onPress={() => handleNumberPress("8")} />
        <Button tittle="9" isGray onPress={() => handleNumberPress("9")} />
        <Button
          tittle="del"
          isGray
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
      </View>

      <View style={Styles.row}>
        <Button tittle="0" isGray onPress={() => handleNumberPress("0")} />
      </View>
    </View>
  );
}
