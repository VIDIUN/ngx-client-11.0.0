/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionFieldRequiredStatus } from './KalturaDistributionFieldRequiredStatus';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDistributionFieldConfigArgs() { }
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.fieldName;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.userFriendlyFieldName;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.entryMrssXslt;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.isRequired;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.type;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.updateOnChange;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.updateParams;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.triggerDeleteOnError;
export class KalturaDistributionFieldConfig extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.updateParams === 'undefined')
            this.updateParams = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionFieldConfig' },
            fieldName: { type: 's' },
            userFriendlyFieldName: { type: 's' },
            entryMrssXslt: { type: 's' },
            isRequired: { type: 'en', subTypeConstructor: KalturaDistributionFieldRequiredStatus, subType: 'KalturaDistributionFieldRequiredStatus' },
            type: { type: 's' },
            updateOnChange: { type: 'b' },
            updateParams: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            isDefault: { type: 'b', readOnly: true },
            triggerDeleteOnError: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.fieldName;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.userFriendlyFieldName;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.entryMrssXslt;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.isRequired;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.type;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.updateOnChange;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.updateParams;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.isDefault;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.triggerDeleteOnError;
}
typesMappingStorage['KalturaDistributionFieldConfig'] = KalturaDistributionFieldConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEYsTUFBTSxxQ0FBc0MsU0FBUSxpQkFBaUI7Ozs7SUFZakUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7S0FDeEU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQ0FBc0MsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDN0ksSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDNUYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM1QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkUmVxdWlyZWRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25GaWVsZFJlcXVpcmVkU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEaXN0cmlidXRpb25GaWVsZENvbmZpZ0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBmaWVsZE5hbWU/IDogc3RyaW5nO1xuXHR1c2VyRnJpZW5kbHlGaWVsZE5hbWU/IDogc3RyaW5nO1xuXHRlbnRyeU1yc3NYc2x0PyA6IHN0cmluZztcblx0aXNSZXF1aXJlZD8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRSZXF1aXJlZFN0YXR1cztcblx0dHlwZT8gOiBzdHJpbmc7XG5cdHVwZGF0ZU9uQ2hhbmdlPyA6IGJvb2xlYW47XG5cdHVwZGF0ZVBhcmFtcz8gOiBLYWx0dXJhU3RyaW5nW107XG5cdHRyaWdnZXJEZWxldGVPbkVycm9yPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXN0cmlidXRpb25GaWVsZENvbmZpZyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGZpZWxkTmFtZSA6IHN0cmluZztcblx0dXNlckZyaWVuZGx5RmllbGROYW1lIDogc3RyaW5nO1xuXHRlbnRyeU1yc3NYc2x0IDogc3RyaW5nO1xuXHRpc1JlcXVpcmVkIDogS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkUmVxdWlyZWRTdGF0dXM7XG5cdHR5cGUgOiBzdHJpbmc7XG5cdHVwZGF0ZU9uQ2hhbmdlIDogYm9vbGVhbjtcblx0dXBkYXRlUGFyYW1zIDogS2FsdHVyYVN0cmluZ1tdO1xuXHRyZWFkb25seSBpc0RlZmF1bHQgOiBib29sZWFuO1xuXHR0cmlnZ2VyRGVsZXRlT25FcnJvciA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25GaWVsZENvbmZpZ0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVwZGF0ZVBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMudXBkYXRlUGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkQ29uZmlnJyB9LFxuXHRcdFx0XHRmaWVsZE5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlckZyaWVuZGx5RmllbGROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5TXJzc1hzbHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNSZXF1aXJlZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25GaWVsZFJlcXVpcmVkU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25GaWVsZFJlcXVpcmVkU3RhdHVzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwZGF0ZU9uQ2hhbmdlIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHVwZGF0ZVBhcmFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHRpc0RlZmF1bHQgOiB7IHR5cGUgOiAnYicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0cmlnZ2VyRGVsZXRlT25FcnJvciA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWcnXSA9IEthbHR1cmFEaXN0cmlidXRpb25GaWVsZENvbmZpZzsiXX0=