let list_btn_number = document.querySelectorAll('.btn_number')
let result = document.getElementById('result')
let func_match = document.getElementById('func_match')

function them(n){
    if(result.textContent == 0){
        func_match.textContent == ""
    }
    func_match.textContent += n
}

function clear_c(){
    func_match.textContent = ""
    result.textContent = 0
}
function tinh(){
    
}

