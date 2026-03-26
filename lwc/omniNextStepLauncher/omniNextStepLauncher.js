import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class OmniNextStepLauncher extends OmniscriptBaseMixin(LightningElement) {

    async advanceWithFlag() {
            //Update the node "backToLastComponent" to true
            await this.omniApplyCallResp({ backToLastComponent: true });
            //Advance to next step
            this.omniNextStep();
    }
}
