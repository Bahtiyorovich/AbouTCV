import { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';
import { useReactToPrint } from 'react-to-print';
import { useNavigate } from "react-router-dom";

export const ResumeContext = createContext();

export const ResumeContextProvider = ({children}) => {
  const [resumeData, setResumeData] = useState(loadFromLocalStorage() || {});
  const [alertTost, setAlertTost] = useState(false);
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const navigate = useNavigate();

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  }
  );


  const alertTostHandler = useCallback(() => {
    setAlertTost(true);
    handlePrint();
    setTimeout(() => {
      setAlertTost(false); // 3 sekunddan keyin alertTost ni false ga o'rnatish
    }, 15000); 
  })

  const validate = () => {
    const newErrors = {};
    if (!resumeData.fullname) newErrors.fullname = 'Name is required';
    if (!resumeData.job) newErrors.job = 'Work type is required';
    if (!resumeData.email) newErrors.email = 'Email is required';
    if (!resumeData.phoneNumber) newErrors.phoneNumber = 'Phone is required';
    if (!resumeData.address) newErrors.address = 'Address is required';
    if (!resumeData.experience) newErrors.experience = 'Experience is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextPage = () => {
    if (validate()) {
      navigate('/save-page')
    }
  }

  useEffect(() => {
    saveToLocalStorage(resumeData);
  }, [resumeData]);

  return (
    <ResumeContext.Provider value={{open, openDrawer, closeDrawer, errors, resumeData, setResumeData, alertTostHandler, nextPage, componentRef, alertTost}}>
      {children}
    </ResumeContext.Provider>  
  )
}

export const useResume = () => useContext(ResumeContext);