import React from 'react'
import { useEffect, useState } from "react";
import "../../CSS/information.css"
export default function Information() {
    useEffect(() => {
        var checkRadio = document.getElementById('1');
        checkRadio.checked = "checked";
        var show = document.getElementById('PHP');
        show.style.display = 'block';
    }, []);

    function showContent(id) {
        var contents = document.getElementsByClassName('tabcontent');

        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        var content = document.getElementById(id);
        content.style.display = 'block';
    }

    function showInfor(val, id) {
        var buttons = document.getElementsByClassName('tablinks');
        var check = document.getElementsByClassName('checked_rd');
        for (var i = 0; i < buttons.length; i++) {
            if (i === id) {
                buttons[i].classList.add("active");
                check[i].checked = true;
            }
            if (i !== id) {
                buttons[i].classList.remove("active");
                check[i].checked = "";
            }
            showContent(val);
        }
    }


    return (
        <div className="container1">
            <div>
                <form className="form-check">
                    <input type="radio" id="1" name="fav_language" value="PHP" onChange={(e) => showInfor(e.target.value, e.target.id - 1)} className="checked_rd" />
                    <label >PHP</label><br />
                    <input type="radio" id="2" name="fav_language" value="HTML" onChange={(e) => showInfor(e.target.value, e.target.id - 1)} className="checked_rd" />
                    <label >HTML</label><br />
                    <input type="radio" id="3" name="fav_language" value="CSS" onChange={(e) => showInfor(e.target.value, e.target.id - 1)} className="checked_rd" />
                    <label >CSS</label>
                </form>
            </div>
            <h4>Click vào các tab để hiển thị nội dung</h4>
            <div className="tab">
                <button id="1" value="PHP" onClick={(e) => showInfor(e.target.value, e.target.id - 1)} className="tablinks active">PHP</button>
                <button id="2" value="HTML" onClick={(e) => showInfor(e.target.value, e.target.id - 1)} className="tablinks">HTML</button>
                <button id="3" value="CSS" onClick={(e) => showInfor(e.target.value, e.target.id - 1)} className="tablinks">CSS</button>
            </div>

            <div id="PHP" className="tabcontent">
                <h3>PHP</h3>
                <p>
                    PHP (viết tắt hồi quy "PHP: Hypertext Preprocessor") là một ngôn ngữ lập
                    trình kịch bản hay một loại mã lệnh chủ yếu được dùng để phát triển các ứng
                    dụng viết cho máy chủ, mã nguồn mở, dùng cho mục đích tổng quát. Nó rất
                    thích hợp với web và có thể dễ dàng nhúng vào trang HTML..
                </p>
            </div>

            <div id="HTML" className="tabcontent">
                <h3>HTML</h3>
                <p>
                    HTML là chữ viết tắt của cụm từ HyperText Markup Language((Xem thêm tại
                    http://vi.wikipedia.org/wiki/HTML)) (dịch là Ngôn ngữ đánh dấu siêu văn bản)
                    được sử dụng để tạo một trang web, trên một website có thể sẽ chứa nhiều trang
                    và mỗi trang được quy ra là một tài liệu HTML.
                </p>
            </div>

            <div id="CSS" className="tabcontent">
                <h3>CSS</h3>
                <p>
                    CSS là chữ viết tắt của Cascading Style Sheets, nó là một ngôn ngữ được sử dụng để
                    tìm và định dạng lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu (ví dụ như HTML).
                </p>
            </div>
        </div>
    )
}
