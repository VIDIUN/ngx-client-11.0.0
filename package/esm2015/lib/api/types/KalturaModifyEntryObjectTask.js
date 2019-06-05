/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaModifyEntryObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputMetadataProfileId;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputMetadata;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.outputMetadataProfileId;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.outputMetadata;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputUserId;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputEntitledUsersEdit;
/** @type {?|undefined} */
KalturaModifyEntryObjectTaskArgs.prototype.inputEntitledUsersPublish;
export class KalturaModifyEntryObjectTask extends KalturaObjectTask {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.inputMetadata === 'undefined')
            this.inputMetadata = [];
        if (typeof this.outputMetadata === 'undefined')
            this.outputMetadata = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaModifyEntryObjectTask' },
            inputMetadataProfileId: { type: 'n' },
            inputMetadata: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            outputMetadataProfileId: { type: 'n' },
            outputMetadata: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            inputUserId: { type: 's' },
            inputEntitledUsersEdit: { type: 's' },
            inputEntitledUsersPublish: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputMetadataProfileId;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputMetadata;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.outputMetadataProfileId;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.outputMetadata;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputUserId;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputEntitledUsersEdit;
    /** @type {?} */
    KalturaModifyEntryObjectTask.prototype.inputEntitledUsersPublish;
}
typesMappingStorage['KalturaModifyEntryObjectTask'] = KalturaModifyEntryObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFzay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhL0UsTUFBTSxtQ0FBb0MsU0FBUSxpQkFBaUI7Ozs7SUFVL0QsWUFBWSxJQUF3QztRQUVoRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDN0UsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0tBQ3RFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pHLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDbEcsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFLZXlWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUtleVZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RUYXNrLCBLYWx0dXJhT2JqZWN0VGFza0FyZ3MgfSBmcm9tICcuL0thbHR1cmFPYmplY3RUYXNrJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTW9kaWZ5RW50cnlPYmplY3RUYXNrQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFza0FyZ3Mge1xuICAgIGlucHV0TWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRpbnB1dE1ldGFkYXRhPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRvdXRwdXRNZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdG91dHB1dE1ldGFkYXRhPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRpbnB1dFVzZXJJZD8gOiBzdHJpbmc7XG5cdGlucHV0RW50aXRsZWRVc2Vyc0VkaXQ/IDogc3RyaW5nO1xuXHRpbnB1dEVudGl0bGVkVXNlcnNQdWJsaXNoPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFzayBleHRlbmRzIEthbHR1cmFPYmplY3RUYXNrIHtcblxuICAgIGlucHV0TWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdGlucHV0TWV0YWRhdGEgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0b3V0cHV0TWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdG91dHB1dE1ldGFkYXRhIDogS2FsdHVyYUtleVZhbHVlW107XG5cdGlucHV0VXNlcklkIDogc3RyaW5nO1xuXHRpbnB1dEVudGl0bGVkVXNlcnNFZGl0IDogc3RyaW5nO1xuXHRpbnB1dEVudGl0bGVkVXNlcnNQdWJsaXNoIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTW9kaWZ5RW50cnlPYmplY3RUYXNrQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW5wdXRNZXRhZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuaW5wdXRNZXRhZGF0YSA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5vdXRwdXRNZXRhZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub3V0cHV0TWV0YWRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTW9kaWZ5RW50cnlPYmplY3RUYXNrJyB9LFxuXHRcdFx0XHRpbnB1dE1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlucHV0TWV0YWRhdGEgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdG91dHB1dE1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG91dHB1dE1ldGFkYXRhIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRpbnB1dFVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbnB1dEVudGl0bGVkVXNlcnNFZGl0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlucHV0RW50aXRsZWRVc2Vyc1B1Ymxpc2ggOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFzayddID0gS2FsdHVyYU1vZGlmeUVudHJ5T2JqZWN0VGFzazsiXX0=