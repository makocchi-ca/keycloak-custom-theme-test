import * as React from 'react';

import {PageHeaderTools} from '@patternfly/react-core';
import {ReferrerLink} from './widgets/ReferrerLink';
import {LogoutButton} from './widgets/Logout';

declare const referrerName: string;
declare function loggedInUserName(): string;

export class PageHeaderTool extends React.Component {
    private hasReferrer: boolean = typeof referrerName !== 'undefined';

    public render(): React.ReactNode {
        const username = loggedInUserName();
    
        return (
            <PageHeaderTools>
                {this.hasReferrer &&
                    <div class="pf-c-page__header-tools-group pf-m-icons pf-u-display-none pf-u-display-flex-on-md">
                        <ReferrerLink/>
                    </div>
                }

                <div class="pf-c-page__header-tools-group pf-m-icons pf-u-display-none pf-u-display-flex-on-md pf-u-mr-md">
                    <LogoutButton/>
                </div>

                <span style={{marginLeft: '10px'}} id="loggedInUser">{username}</span>
            </PageHeaderTools>
        );
    }
}
