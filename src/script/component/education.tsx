import { Tabs } from "@mantine/core";

const Education = () => {
  return (
    <Tabs defaultValue="education" className="background-section">
      <Tabs.List>
        <Tabs.Tab value="education" className="tab">
          <a className="tab-item">Education</a>
        </Tabs.Tab>
        <Tabs.Tab value="certificates" className="tab">
          <a className="tab-item">Certificates</a>
        </Tabs.Tab>
      </Tabs.List>

      <div className="tab-seperator">
      </div>

      <Tabs.Panel value="education">
        <div className="edu-1">
          <h1>Bachelor Degree of Information Technology</h1>
          <p>Mapua Malayan Colleges of Laguna (July 2022 - 2026)</p>
          <ul>Maintained Dean’s Lister status for three consecutive academic years.</ul>
          <ul>Passed Data Structure and Algorithms.</ul>
        </div>        
      </Tabs.Panel>

      <Tabs.Panel value="certificates">
        certificates
      </Tabs.Panel>

    </Tabs> 
  );
};

export default Education;

{/* <div className="background-section">      
      <div className="background-content-tabs">        
        <a href="#education" className="nav-item">Education</a>
      </div>       
      <div className="background-content">
        
      </div>
    </div>  */}