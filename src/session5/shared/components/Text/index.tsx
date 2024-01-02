import { TextProps } from 'react-native';
import { TextContainer } from './text.style';
import { textTypes } from './textTypes';

interface TextContainerProps extends TextProps {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({ color, type, margin, ...props }: TextContainerProps) => {
  const handleFontSize = () => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_REGULAR:
      case textTypes.TITLE_LIGHT:
        return '24px';
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.SUB_TITLE_LIGHT:
        return '20px';
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_REGULAR:
      case textTypes.BUTTON_LIGHT:
        return '18px';
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_LIGHT:
        return '14px';
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
        return '10px';
      default:
        return '16px';
    }
  };

  return (
    <TextContainer
      fontSize={handleFontSize}
      color={color}
      margin={margin}
      {...props}
    ></TextContainer>
  );
};

export default Text;
