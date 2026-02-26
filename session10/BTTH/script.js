let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];

const displayPlayerList = (listPlayer) => {
    console.log("Danh sách cầu thủ:");
    listPlayer.forEach(() => {
        console.log();
        
    });
    
}

let choice;
const displayMenu = () => {
    choice = +prompt(`--- FOOTBALL MANAGER PRO ---
            1. Xem đội hình
            2. Thêm cầu thủ
            3. Tìm kiếm (theo ID)
            4. Cập nhật bàn thắng
            5. Xóa cầu thủ (Chuyển nhượng)
            0. Thoát`
        );
};

do {
    displayMenu();
    switch(choice) {
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "0":
            console.log("\n=> Hẹn gặp lại!");
            break;
        default: 
            console.log("\n=> Lựa chọn không hợp lệ!");
    }
} while (choice != 0);

