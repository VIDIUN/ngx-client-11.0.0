/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaProvisionJobData } from './KalturaProvisionJobData';
/**
 * @record
 */
export function KalturaVelocixProvisionJobDataArgs() { }
/** @type {?|undefined} */
KalturaVelocixProvisionJobDataArgs.prototype.provisioningParams;
/** @type {?|undefined} */
KalturaVelocixProvisionJobDataArgs.prototype.userName;
/** @type {?|undefined} */
KalturaVelocixProvisionJobDataArgs.prototype.password;
export class KalturaVelocixProvisionJobData extends KalturaProvisionJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.provisioningParams === 'undefined')
            this.provisioningParams = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaVelocixProvisionJobData' },
            provisioningParams: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            userName: { type: 's' },
            password: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaVelocixProvisionJobData.prototype.provisioningParams;
    /** @type {?} */
    KalturaVelocixProvisionJobData.prototype.userName;
    /** @type {?} */
    KalturaVelocixProvisionJobData.prototype.password;
}
typesMappingStorage['KalturaVelocixProvisionJobData'] = KalturaVelocixProvisionJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZlbG9jaXhQcm92aXNpb25Kb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVmVsb2NpeFByb3Zpc2lvbkpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7OztBQVNqRyxNQUFNLHFDQUFzQyxTQUFRLHVCQUF1Qjs7OztJQU12RSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7S0FDcEY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3RHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEsIEthbHR1cmFQcm92aXNpb25Kb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFWZWxvY2l4UHJvdmlzaW9uSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGFBcmdzIHtcbiAgICBwcm92aXNpb25pbmdQYXJhbXM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdHVzZXJOYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVmVsb2NpeFByb3Zpc2lvbkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YSB7XG5cbiAgICBwcm92aXNpb25pbmdQYXJhbXMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0dXNlck5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVmVsb2NpeFByb3Zpc2lvbkpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm92aXNpb25pbmdQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnByb3Zpc2lvbmluZ1BhcmFtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFWZWxvY2l4UHJvdmlzaW9uSm9iRGF0YScgfSxcblx0XHRcdFx0cHJvdmlzaW9uaW5nUGFyYW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHR1c2VyTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVmVsb2NpeFByb3Zpc2lvbkpvYkRhdGEnXSA9IEthbHR1cmFWZWxvY2l4UHJvdmlzaW9uSm9iRGF0YTsiXX0=