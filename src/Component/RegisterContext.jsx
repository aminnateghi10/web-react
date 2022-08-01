import {useReducer} from "react";
import Information from "../State/Information/context.jsx";
import Client from "../State/Client/context.jsx";
import Experience from "../State/Experience/context.jsx";
import Service from "../State/Service/context.jsx";
import Skill from "../State/Skill/context.jsx";
import Preloader from "../State/Preloader/context.jsx";
import PreloaderReducers from "../State/Preloader/reducers.jsx";
import InformationReducers from "../State/Information/reducers.jsx";
import ExperienceReducers from "../State/Experience/reducers.jsx";
import ClientReducers from "../State/Client/reducers.jsx";
import ServiceReducers from "../State/Service/reducers.jsx";
import SkillReducers from "../State/Skill/reducers.jsx";


function RegisterContext(props) {
    const [InformationState, InformationDispatch] = useReducer(InformationReducers, {
        name:''
    })
    const [ClientState, ClientDispatch] = useReducer(ClientReducers, {})
    const [ExperienceState, ExperienceDispatch] = useReducer(ExperienceReducers, {})
    const [ServiceState, ServiceDispatch] = useReducer(ServiceReducers, {})
    const [SkillState, SkillDispatch] = useReducer(SkillReducers, {})
    const [PreloaderState, PreloaderDispatch] = useReducer(PreloaderReducers, {loader:false})
    return (
        <Information.Provider value={{state: InformationState, dispatch: InformationDispatch}}>
            <Client.Provider value={{state: ClientState, dispatch: ClientDispatch}}>
                <Experience.Provider value={{state: ExperienceState, dispatch: ExperienceDispatch}}>
                    <Service.Provider value={{state: ServiceState, dispatch: ServiceDispatch}}>
                        <Skill.Provider value={{state: SkillState, dispatch: SkillDispatch}}>
                            <Preloader.Provider value={{state: PreloaderState, dispatch: PreloaderDispatch}}>
                                {
                                    props.children
                                }
                            </Preloader.Provider>
                        </Skill.Provider>
                    </Service.Provider>
                </Experience.Provider>
            </Client.Provider>
        </Information.Provider>
    )
}

export default RegisterContext;