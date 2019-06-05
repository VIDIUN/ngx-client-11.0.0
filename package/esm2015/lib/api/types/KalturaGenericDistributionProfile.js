/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDistributionProfileAction } from './KalturaGenericDistributionProfileAction';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
/**
 * @record
 */
export function KalturaGenericDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.genericProviderId;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.submitAction;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.updateAction;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.deleteAction;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.fetchReportAction;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.updateRequiredEntryFields;
/** @type {?|undefined} */
KalturaGenericDistributionProfileArgs.prototype.updateRequiredMetadataXPaths;
export class KalturaGenericDistributionProfile extends KalturaDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaGenericDistributionProfile' },
            genericProviderId: { type: 'n' },
            submitAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProfileAction, subType: 'KalturaGenericDistributionProfileAction' },
            updateAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProfileAction, subType: 'KalturaGenericDistributionProfileAction' },
            deleteAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProfileAction, subType: 'KalturaGenericDistributionProfileAction' },
            fetchReportAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProfileAction, subType: 'KalturaGenericDistributionProfileAction' },
            updateRequiredEntryFields: { type: 's' },
            updateRequiredMetadataXPaths: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.genericProviderId;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.submitAction;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.updateAction;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.deleteAction;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.fetchReportAction;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.updateRequiredEntryFields;
    /** @type {?} */
    KalturaGenericDistributionProfile.prototype.updateRequiredMetadataXPaths;
}
typesMappingStorage['KalturaGenericDistributionProfile'] = KalturaGenericDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhMUcsTUFBTSx3Q0FBeUMsU0FBUSwwQkFBMEI7Ozs7SUFVN0UsWUFBWSxJQUE2QztRQUVyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ2hKLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ2hKLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUNBQXVDLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQ2hKLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx1Q0FBdUMsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7WUFDckoseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGdlbmVyaWNQcm92aWRlcklkPyA6IG51bWJlcjtcblx0c3VibWl0QWN0aW9uPyA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbjtcblx0dXBkYXRlQWN0aW9uPyA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbjtcblx0ZGVsZXRlQWN0aW9uPyA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbjtcblx0ZmV0Y2hSZXBvcnRBY3Rpb24/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uO1xuXHR1cGRhdGVSZXF1aXJlZEVudHJ5RmllbGRzPyA6IHN0cmluZztcblx0dXBkYXRlUmVxdWlyZWRNZXRhZGF0YVhQYXRocz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIGdlbmVyaWNQcm92aWRlcklkIDogbnVtYmVyO1xuXHRzdWJtaXRBY3Rpb24gOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb247XG5cdHVwZGF0ZUFjdGlvbiA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbjtcblx0ZGVsZXRlQWN0aW9uIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uO1xuXHRmZXRjaFJlcG9ydEFjdGlvbiA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbjtcblx0dXBkYXRlUmVxdWlyZWRFbnRyeUZpZWxkcyA6IHN0cmluZztcblx0dXBkYXRlUmVxdWlyZWRNZXRhZGF0YVhQYXRocyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0Z2VuZXJpY1Byb3ZpZGVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3VibWl0QWN0aW9uIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24sIHN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uJyB9LFxuXHRcdFx0XHR1cGRhdGVBY3Rpb24gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24nIH0sXG5cdFx0XHRcdGRlbGV0ZUFjdGlvbiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbicgfSxcblx0XHRcdFx0ZmV0Y2hSZXBvcnRBY3Rpb24gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVBY3Rpb24nIH0sXG5cdFx0XHRcdHVwZGF0ZVJlcXVpcmVkRW50cnlGaWVsZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBkYXRlUmVxdWlyZWRNZXRhZGF0YVhQYXRocyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=