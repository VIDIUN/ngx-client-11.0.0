/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetDistributionCondition } from './KalturaAssetDistributionCondition';
/**
 * @record
 */
export function KalturaAssetDistributionPropertyConditionArgs() { }
/** @type {?|undefined} */
KalturaAssetDistributionPropertyConditionArgs.prototype.propertyName;
/** @type {?|undefined} */
KalturaAssetDistributionPropertyConditionArgs.prototype.propertyValue;
export class KalturaAssetDistributionPropertyCondition extends KalturaAssetDistributionCondition {
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
            objectType: { type: 'c', default: 'KalturaAssetDistributionPropertyCondition' },
            propertyName: { type: 's' },
            propertyValue: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAssetDistributionPropertyCondition.prototype.propertyName;
    /** @type {?} */
    KalturaAssetDistributionPropertyCondition.prototype.propertyValue;
}
typesMappingStorage['KalturaAssetDistributionPropertyCondition'] = KalturaAssetDistributionPropertyCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUHJvcGVydHlDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBc3NldERpc3RyaWJ1dGlvblByb3BlcnR5Q29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUF5QyxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7QUFRL0gsTUFBTSxnREFBaUQsU0FBUSxpQ0FBaUM7Ozs7SUFLNUYsWUFBWSxJQUFxRDtRQUU3RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJDQUEyQyxDQUFDLEdBQUcseUNBQXlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uQ29uZGl0aW9uLCBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25Db25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXREaXN0cmlidXRpb25Db25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBc3NldERpc3RyaWJ1dGlvblByb3BlcnR5Q29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25Db25kaXRpb25BcmdzIHtcbiAgICBwcm9wZXJ0eU5hbWU/IDogc3RyaW5nO1xuXHRwcm9wZXJ0eVZhbHVlPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUHJvcGVydHlDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25Db25kaXRpb24ge1xuXG4gICAgcHJvcGVydHlOYW1lIDogc3RyaW5nO1xuXHRwcm9wZXJ0eVZhbHVlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXNzZXREaXN0cmlidXRpb25Qcm9wZXJ0eUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXNzZXREaXN0cmlidXRpb25Qcm9wZXJ0eUNvbmRpdGlvbicgfSxcblx0XHRcdFx0cHJvcGVydHlOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3BlcnR5VmFsdWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFzc2V0RGlzdHJpYnV0aW9uUHJvcGVydHlDb25kaXRpb24nXSA9IEthbHR1cmFBc3NldERpc3RyaWJ1dGlvblByb3BlcnR5Q29uZGl0aW9uOyJdfQ==