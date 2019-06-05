/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionValidationError } from './KalturaDistributionValidationError';
/**
 * @record
 */
export function KalturaDistributionValidationErrorMissingAssetArgs() { }
/** @type {?|undefined} */
KalturaDistributionValidationErrorMissingAssetArgs.prototype.data;
export class KalturaDistributionValidationErrorMissingAsset extends KalturaDistributionValidationError {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionValidationErrorMissingAsset' },
            data: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributionValidationErrorMissingAsset.prototype.data;
}
typesMappingStorage['KalturaDistributionValidationErrorMissingAsset'] = KalturaDistributionValidationErrorMissingAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBMEMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7OztBQU9sSSxNQUFNLHFEQUFzRCxTQUFRLGtDQUFrQzs7OztJQUlsRyxZQUFZLElBQTBEO1FBRWxFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnREFBZ0QsRUFBRTtZQUNuRyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1osQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLGdEQUFnRCxDQUFDLEdBQUcsOENBQThDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvciwgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JNaXNzaW5nQXNzZXRBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JBcmdzIHtcbiAgICBkYXRhPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdBc3NldCBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3Ige1xuXG4gICAgZGF0YSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvck1pc3NpbmdBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yTWlzc2luZ0Fzc2V0JyB9LFxuXHRcdFx0XHRkYXRhIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JNaXNzaW5nQXNzZXQnXSA9IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JNaXNzaW5nQXNzZXQ7Il19