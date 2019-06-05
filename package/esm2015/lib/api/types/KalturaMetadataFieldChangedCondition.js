/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaMetadataFieldChangedConditionArgs() { }
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.xPath;
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.profileId;
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.profileSystemName;
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.versionA;
/** @type {?|undefined} */
KalturaMetadataFieldChangedConditionArgs.prototype.versionB;
export class KalturaMetadataFieldChangedCondition extends KalturaMatchCondition {
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
            objectType: { type: 'c', default: 'KalturaMetadataFieldChangedCondition' },
            xPath: { type: 's' },
            profileId: { type: 'n' },
            profileSystemName: { type: 's' },
            versionA: { type: 's' },
            versionB: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.xPath;
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.profileId;
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.profileSystemName;
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.versionA;
    /** @type {?} */
    KalturaMetadataFieldChangedCondition.prototype.versionB;
}
typesMappingStorage['KalturaMetadataFieldChangedCondition'] = KalturaMetadataFieldChangedCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhRmllbGRDaGFuZ2VkQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWV0YWRhdGFGaWVsZENoYW5nZWRDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVczRixNQUFNLDJDQUE0QyxTQUFRLHFCQUFxQjs7OztJQVEzRSxZQUFZLElBQWdEO1FBRXhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQ0FBc0MsRUFBRTtZQUN6RixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNYXRjaENvbmRpdGlvbiwgS2FsdHVyYU1hdGNoQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYU1hdGNoQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWV0YWRhdGFGaWVsZENoYW5nZWRDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbkFyZ3Mge1xuICAgIHhQYXRoPyA6IHN0cmluZztcblx0cHJvZmlsZUlkPyA6IG51bWJlcjtcblx0cHJvZmlsZVN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHR2ZXJzaW9uQT8gOiBzdHJpbmc7XG5cdHZlcnNpb25CPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1ldGFkYXRhRmllbGRDaGFuZ2VkQ29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYU1hdGNoQ29uZGl0aW9uIHtcblxuICAgIHhQYXRoIDogc3RyaW5nO1xuXHRwcm9maWxlSWQgOiBudW1iZXI7XG5cdHByb2ZpbGVTeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHR2ZXJzaW9uQSA6IHN0cmluZztcblx0dmVyc2lvbkIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZXRhZGF0YUZpZWxkQ2hhbmdlZENvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWV0YWRhdGFGaWVsZENoYW5nZWRDb25kaXRpb24nIH0sXG5cdFx0XHRcdHhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcm9maWxlU3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uQSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uQiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWV0YWRhdGFGaWVsZENoYW5nZWRDb25kaXRpb24nXSA9IEthbHR1cmFNZXRhZGF0YUZpZWxkQ2hhbmdlZENvbmRpdGlvbjsiXX0=