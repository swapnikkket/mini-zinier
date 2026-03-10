const run = async () => {
    console.log('1. Creating Job...');
    const jobRes = await fetch('http://127.0.0.1:3001/jobs', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fix Heater', description: 'Heater broken', location: 'Living Room', priority: 'High' })
    });
    const job = await jobRes.json();
    console.log('Job Created:', job._id);

    console.log('\n2. Creating Technician...');
    const techRes = await fetch('http://127.0.0.1:3002/technicians', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Alice Tech', email: `alice_${Date.now()}@example.com`, phone: '987-654-3210', skills: ['HVAC'] })
    });
    const tech = await techRes.json();
    console.log('Technician Created:', tech._id);

    console.log('\n3. Technician Accepting Job...');
    const acceptRes = await fetch(`http://127.0.0.1:3002/technicians/${tech._id}/accept-job/${job._id}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }
    });
    const acceptData = await acceptRes.json();
    console.log('Acceptance Successful. Technician currentJobs:', acceptData.currentJobs);

    console.log('\n4. Verifying Job in job-service...');
    const checkJobRes = await fetch('http://127.0.0.1:3001/jobs');
    const jobs = await checkJobRes.json();
    const updatedJob = jobs.find(j => j._id === job._id);
    console.log('Job Status:', updatedJob.status);
    console.log('Assigned Technician ID:', updatedJob.assignedTechnician);
};

run().catch(console.error);
