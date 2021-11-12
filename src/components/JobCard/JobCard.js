import React, { Component } from 'react'

import './JobCard.scss'
import Card from '../../components/Card/Card'
import clogo from '../../assets/images/icons/company-logo.png'

class JobCard extends Component {
    state = {
        ShowHidedesc: false,
        btnContent: 'View More'
    }

    handleClick = () => {
        this.setState({ ShowHidedesc: !this.state.ShowHidedesc })
        if (this.state.ShowHidedesc) {
            this.setState({ btnContent: 'View More' })
        } else {
            this.setState({ btnContent: 'View Less' })
        }
    }

    render() {
        return (
            <div class="jobCard-container">
                <Card>
                    <div class="jobCard-content">
                        <div class="section-1">
                            <img src={clogo} alt="Company Logo"></img>
                        </div>
                        <div class="section-2">
                            <h2>{this.props.position}</h2>
                            <h4>{this.props.company}</h4>
                            <span class="location">{this.props.location}</span>
                            <div class="btns-container">
                                <button id="btn1" class="btn1">
                                    Apply Now
                                </button>
                                <button id="btn2" class="btn2" onClick={this.handleClick}>
                                    {this.state.btnContent}
                                </button>
                            </div>
                        </div>
                        <div class="section-3">
                            <h4 class="lh-25">
                                Job Type: <span class="job-spec">{this.props.type}</span>{' '}
                                <span class="job-spec">{this.props.experience} Experience</span>
                            </h4>
                            <h4 class="lh-25">
                                Salary/Stipend:{' '}
                                <span class="job-spec">${this.props.salary} + Benefits</span>
                            </h4>
                            <h4 class="lh-25">
                                Skills:
                                {this.props.skills.map((skill) => (
                                    <span class="job-spec">{skill}</span>
                                ))}
                            </h4>
                        </div>
                    </div>
                    <div
                        class="jobCard-desc"
                        style={{ display: this.state.ShowHidedesc ? 'block' : 'none' }}>
                        <h4>Description</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy At vero eos
                            et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non provident, similique
                            sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                            dolorum fuga.{' '}
                        </p>
                    </div>
                </Card>
            </div>
        )
    }
}

export default JobCard
