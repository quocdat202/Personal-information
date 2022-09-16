import React from 'react'
import "../../CSS/projects.css";
export default function Projects() {
    return (
        <div className="project">
            <div className="title-project">
                <p>Các Project</p>
            </div>
            <div className="project-panel">
                <div className="project-react panel">
                    <div className="project-react-title">
                        <p className="title-project-center">Tên project: Trang web bán đồ công nghệ</p>
                    </div>
                </div>
                <div className="project-php panel">
                    <div className="project-php-title">
                        <p className="title-project-center">Tên project: Trang web bán giày</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
