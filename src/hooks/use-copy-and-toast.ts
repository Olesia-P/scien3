import useToast from './use-toast';

function useCopyAndToast() {
  const showToast = useToast();

  const copyText = (text: string, message: string) => {
    navigator.clipboard.writeText(text).then(() => showToast(message));
  };

  return copyText;
}

export default useCopyAndToast;
