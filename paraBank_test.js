import http from 'k6/http' ;
import { sleep, check } from 'k6';

export let options = {
    vus: 5,
    duration: '10s',
    iteration: 2, 
};

export default function() {
    let res = http.get('https://para.testar.org/');
    check(res, {'status is 200' : (r)=> r.status === 200 });
    sleep(1)
}

export function handleSummary(data) {
    return {
        'F:/SQA/k6/ParaBank_k6/summary.json': JSON.stringify(data), // Save the summary data as a JSON file
    };
}