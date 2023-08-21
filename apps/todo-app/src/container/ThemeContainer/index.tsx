import { ButtonHTMLAttributes, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThemeButton from '@/components/ThemeButton';
import { initTheme, toggleTheme } from '@/store/slices/themeSlice';
import { RootState } from '@/store/store';
import { Theme } from '@/types/theme';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const ThemeButtonContainer: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });

  useEffect(() => {
    let theme = Theme.LIGHT;
    const localTheme = localStorage.getItem('theme');
    const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
    if (localTheme) {
      theme = Theme.fromString(localTheme);
    } else if (isDark) {
      theme = Theme.DARK;
    }
    if (theme === Theme.DARK) {
      dispatch(initTheme(theme));
    }
  }, [dispatch]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (!htmlElement) {
      return;
    }
    if (theme === Theme.LIGHT) {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
    } else {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    }
  }, [theme]);

  return <ThemeButton theme={theme} onClick={() => dispatch(toggleTheme())} />;
};

export default ThemeButtonContainer;
