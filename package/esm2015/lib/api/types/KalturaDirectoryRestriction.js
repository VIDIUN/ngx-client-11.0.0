/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDirectoryRestrictionType } from './KalturaDirectoryRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaDirectoryRestrictionArgs() { }
/** @type {?|undefined} */
KalturaDirectoryRestrictionArgs.prototype.directoryRestrictionType;
export class KalturaDirectoryRestriction extends KalturaBaseRestriction {
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
            objectType: { type: 'c', default: 'KalturaDirectoryRestriction' },
            directoryRestrictionType: { type: 'en', subTypeConstructor: KalturaDirectoryRestrictionType, subType: 'KalturaDirectoryRestrictionType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDirectoryRestriction.prototype.directoryRestrictionType;
}
typesMappingStorage['KalturaDirectoryRestriction'] = KalturaDirectoryRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFPOUYsTUFBTSxrQ0FBbUMsU0FBUSxzQkFBc0I7Ozs7SUFJbkUsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLCtCQUErQixFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtTQUNwSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzdHJpY3Rpb24sIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVJlc3RyaWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIHtcbiAgICBkaXJlY3RvcnlSZXN0cmljdGlvblR5cGU/IDogS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uVHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXN0cmljdGlvbiB7XG5cbiAgICBkaXJlY3RvcnlSZXN0cmljdGlvblR5cGUgOiBLYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb25UeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uJyB9LFxuXHRcdFx0XHRkaXJlY3RvcnlSZXN0cmljdGlvblR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlyZWN0b3J5UmVzdHJpY3Rpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEaXJlY3RvcnlSZXN0cmljdGlvblR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXJlY3RvcnlSZXN0cmljdGlvbiddID0gS2FsdHVyYURpcmVjdG9yeVJlc3RyaWN0aW9uOyJdfQ==