import { Dimensions, PixelRatio , Platform } from 'react-native';

let { width: SCREEN_WIDTH,height: SCREEN_HEIGHT } = Dimensions.get('window');

//Width
const width = widthPercent => {

  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * elemWidth / 100);
};

//Height
const height = heightPercent => {

  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * elemHeight / 100);
};

//Font
const scale = SCREEN_WIDTH / 320;

const font = fontSizeScreen => {
  
  elemFont = typeof fontSizeScreen === "number" ? fontSizeScreen : parseFloat(fontSizeScreen);
  
  const newSize = elemFont * scale 
  
  if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else if(Platform.OS === 'android') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
};


export { width , height , font };