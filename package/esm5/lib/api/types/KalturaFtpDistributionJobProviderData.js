/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFtpDistributionFile } from './KalturaFtpDistributionFile';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaFtpDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaFtpDistributionJobProviderDataArgs.prototype.filesForDistribution;
var KalturaFtpDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFtpDistributionJobProviderData, _super);
    function KalturaFtpDistributionJobProviderData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.filesForDistribution === 'undefined')
            _this.filesForDistribution = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaFtpDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFtpDistributionJobProviderData' },
            filesForDistribution: { type: 'a', subTypeConstructor: KalturaFtpDistributionFile, subType: 'KalturaFtpDistributionFile' }
        });
        return result;
    };
    return KalturaFtpDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaFtpDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaFtpDistributionJobProviderData.prototype.filesForDistribution;
}
typesMappingStorage['KalturaFtpDistributionJobProviderData'] = KalturaFtpDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsOENBQThDLEVBQXNELE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7QUFPdEssSUFBQTtJQUEyRCxpRUFBOEM7SUFJckcsK0NBQVksSUFBaUQ7UUFBN0QsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7O0tBQ3hGOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUYsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUNySCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dEQS9CTDtFQVUyRCw4Q0FBOEMsRUFzQnhHLENBQUE7QUF0QkQsaURBc0JDOzs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGUgfSBmcm9tICcuL0thbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgZmlsZXNGb3JEaXN0cmlidXRpb24/IDogS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkZpbGVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgZmlsZXNGb3JEaXN0cmlidXRpb24gOiBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uRmlsZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZmlsZXNGb3JEaXN0cmlidXRpb24gPT09ICd1bmRlZmluZWQnKSB0aGlzLmZpbGVzRm9yRGlzdHJpYnV0aW9uID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZ0cERpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0ZmlsZXNGb3JEaXN0cmlidXRpb24gOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlLCBzdWJUeXBlIDogJ0thbHR1cmFGdHBEaXN0cmlidXRpb25GaWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRnRwRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==