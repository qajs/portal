// import Modal from './type/Modal';
// import Drawer from './type/Drawer';


export default const Portal = (config) => (
     <>                        
                            {
                                config.types.includes("modal") &&
                                <>
                                    {
                                        <Modal config={config.modal} />
                                    }
                                </>
                            }
                            
                            {
                                config.types.includes("drawer") &&
                                <>
                                    {
                                        <Drawer config={config.drawer} />
                                    }
                                </>
                            }
                            
                            {
                                config.types.includes("slide") &&
                                <>
                                    {
                                        <Drawer config={config.slide} />
                                    }
                                </>
                            }

                        </>
)